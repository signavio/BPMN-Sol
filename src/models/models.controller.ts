import * as solc from "solc";
import { ModelInfo } from "./definitions";
import { parseModel } from "./models.parsers";
import { modelStore } from "./models.store";

export let bpmn2sol = xml =>
  new Promise((resolve, reject) => {
    const modelInfo: ModelInfo = xml as ModelInfo;
    let sol = "";
    let byteCode = "";
    let abi = "";
    const cont = parseModel(modelInfo);
    return cont.then(() => {
      let input = {};
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
      const output = solc.compile({ sources: input });

      if (Object.keys(output.contracts).length === 0) {
        console.log("COMPILATION ERROR IN SMART CONTRACTS");
        return;
      }

      modelInfo.contracts = output.contracts;

      byteCode = output.contracts[modelInfo.entryContractName].bytecode;
      abi = output.contracts[modelInfo.entryContractName].interface;
      resolve({ Solidity: sol, Bytecode: byteCode, ABI: abi });
    });
  });


