export class ModelInfo {
  name: string;
  bpmn: string;
  solidity: string;
  controlFlowInfoMap: Map<string, ControlFlowInfo>;
  entryContractName: string;
  contracts: any;
}

export class ParameterInfo {
  constructor(public type: string, public name: string) {}
}

export class OracleInfo {
  address: string = null;
  functionName: string = null;
  functionParameters: Array<ParameterInfo> = new Array();

  constructor(public oracleName: string) {}
}

export class ControlFlowInfo {
  parent: ControlFlowInfo = null;
  isEmbedded: boolean = false;
  nodeNameMap: Map<string, string> = new Map();
  nodeIndexMap: Map<string, number> = new Map();
  edgeIndexMap: Map<string, number> = new Map();
  multiinstanceActivities: Map<string, string> = new Map();
  nonInterruptingEvents: Map<string, string> = new Map();
  callActivities: Map<string, string> = new Map();
  childSubprocesses: Map<string, string> = new Map();
  activeMessages: Array<string>;
  globalParameters: string = "";
  localParameters: Map<string, Array<ParameterInfo>> = new Map();
  oracleInfo: Map<string, OracleInfo> = new Map();
  oracleTaskMap: Map<string, string> = new Map();

  constructor(
    public self: any,
    public nodeList: Array<string>,
    public edgeList: Array<string>,
    public sources: Array<string>,
    public boundaryEvents: Array<string>
  ) {}
}
