"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelInfo = /** @class */ (function () {
    function ModelInfo() {
    }
    return ModelInfo;
}());
exports.ModelInfo = ModelInfo;
var ParameterInfo = /** @class */ (function () {
    function ParameterInfo(type, name) {
        this.type = type;
        this.name = name;
    }
    return ParameterInfo;
}());
exports.ParameterInfo = ParameterInfo;
var OracleInfo = /** @class */ (function () {
    function OracleInfo(oracleName) {
        this.oracleName = oracleName;
        this.address = null;
        this.functionName = null;
        this.functionParameters = new Array();
    }
    return OracleInfo;
}());
exports.OracleInfo = OracleInfo;
var ControlFlowInfo = /** @class */ (function () {
    function ControlFlowInfo(self, nodeList, edgeList, sources, boundaryEvents) {
        this.self = self;
        this.nodeList = nodeList;
        this.edgeList = edgeList;
        this.sources = sources;
        this.boundaryEvents = boundaryEvents;
        this.parent = null;
        this.isEmbedded = false;
        this.nodeNameMap = new Map();
        this.nodeIndexMap = new Map();
        this.edgeIndexMap = new Map();
        this.multiinstanceActivities = new Map();
        this.nonInterruptingEvents = new Map();
        this.callActivities = new Map();
        this.childSubprocesses = new Map();
        this.globalParameters = "";
        this.localParameters = new Map();
        this.oracleInfo = new Map();
        this.oracleTaskMap = new Map();
    }
    return ControlFlowInfo;
}());
exports.ControlFlowInfo = ControlFlowInfo;
//# sourceMappingURL=definitions.js.map