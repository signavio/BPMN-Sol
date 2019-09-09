import { workers } from "cluster";
import { Router, response } from "express";
import * as solc from "solc";
import * as Web3 from "web3";
import * as BigNumber from "bignumber.js";
import { ModelInfo } from "./definitions";
import { parseModel } from "./models.parsers";
import { modelStore } from "./models.store";
import { log } from "util";

const activityContractMap: Map<string, Array<string>> = new Map();
const runningActivities: Map<string, any> = new Map(); // contract-activity
const enabledTasks: Map<string, any> = new Map();
const validExecution = false;

export let bpmn2sol = xml =>
  new Promise((resolve, reject) => {
    const modelInfo: ModelInfo = xml as ModelInfo;
    let sol = "";
    let byteCode = "";
    let abi = "";
    const cont = parseModel(modelInfo);
    return cont.then(() => {
      const input = {};
      input[modelInfo.name] = modelInfo.solidity;

      const activityNames = [];
      modelInfo.controlFlowInfoMap.forEach(
        (controlFlowInfo, contractName, map) => {
          controlFlowInfo.callActivities.forEach(
            (activityName, activityId, map2) => {
              activityNames.push(activityName);
            }
          );
        }
      );
      activityNames.forEach(activityName => {
        if (!modelStore.has(activityName)) {
          console.log(`ERROR: Process model '${activityName}' not found`);
          return;
        }
        input[activityName] = modelStore.get(activityName).solidity;
      });

      Object.keys(input).forEach(key => {
        sol = input[key];
      });

      const output = solc.compile({ sources: input }, 1);

      if (Object.keys(output.contracts).length === 0) {
        console.log("COMPILATION ERROR IN SMART CONTRACTS");
        return;
      }

      Object.keys(output.contracts).forEach(key => {});
      modelInfo.contracts = output.contracts;

      byteCode = output.contracts[modelInfo.entryContractName].bytecode;
      abi = output.contracts[modelInfo.entryContractName].interface;
      resolve({ Solidity: sol, Bytecode: byteCode, ABI: abi });
    });
  });
