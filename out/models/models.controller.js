"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var solc = require("solc");
var models_parsers_1 = require("./models.parsers");
var models_store_1 = require("./models.store");
var activityContractMap = new Map();
var runningActivities = new Map(); // contract-activity
var enabledTasks = new Map();
var validExecution = false;
exports.bpmn2sol = function (xml) {
    return new Promise(function (resolve, reject) {
        var modelInfo = xml;
        var sol = "";
        var byteCode = "";
        var abi = "";
        var cont = models_parsers_1.parseModel(modelInfo);
        return cont.then(function () {
            var input = {};
            input[modelInfo.name] = modelInfo.solidity;
            var activityNames = [];
            modelInfo.controlFlowInfoMap.forEach(function (controlFlowInfo, contractName, map) {
                controlFlowInfo.callActivities.forEach(function (activityName, activityId, map2) {
                    activityNames.push(activityName);
                });
            });
            activityNames.forEach(function (activityName) {
                if (!models_store_1.modelStore.has(activityName)) {
                    console.log("ERROR: Process model '" + activityName + "' not found");
                    return;
                }
                input[activityName] = models_store_1.modelStore.get(activityName).solidity;
            });
            Object.keys(input).forEach(function (key) {
                sol = input[key];
            });
            var output = solc.compile({ sources: input }, 1);
            if (Object.keys(output.contracts).length === 0) {
                console.log("COMPILATION ERROR IN SMART CONTRACTS");
                return;
            }
            Object.keys(output.contracts).forEach(function (key) { });
            modelInfo.contracts = output.contracts;
            byteCode = output.contracts[modelInfo.entryContractName].bytecode;
            abi = output.contracts[modelInfo.entryContractName].interface;
            resolve({ Solidity: sol, Bytecode: byteCode, ABI: abi });
        });
    });
};
//# sourceMappingURL=models.controller.js.map