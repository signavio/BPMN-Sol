# BPMN-Sol
[![CircleCI](https://circleci.com/gh/signavio/BPMN-Sol/tree/master.svg?style=svg&circle-token=ef21a374de1b68ab12004774d76abcb3512868f3)](https://circleci.com/gh/signavio/BPMN-Sol/tree/master)

`BPMN-Sol` is a compiler to convert BPMN 2.0 xml to solidity smart contract.

## Installation

To install the package run the following command.

```
npm install bpmn-sol

```

You can require the package by using 

```JavaScript
const compiler = require('bpmn-sol)
```



## Usage 
The BPMN 2.0 xml can be converted to solidity using the `compile()` function. The xml to be passed should be an object with the xml value and a name for the smart contract. It has to be in below format.

```JavaScript
const xml = {
  bpmn: '<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">\n  <bpmn:process id="Process_0" name="Process_0" isExecutable="false">\n    <bpmn:startEvent id="StartEvent_1">\n      <bpmn:outgoing>SequenceFlow_005ctt4</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:task id="Task_1hm78g6" name="a">\n      <bpmn:incoming>SequenceFlow_005ctt4</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_06osrd7</bpmn:outgoing>\n    </bpmn:task>\n    <bpmn:sequenceFlow id="SequenceFlow_005ctt4" sourceRef="StartEvent_1" targetRef="Task_1hm78g6" />\n    <bpmn:endEvent id="EndEvent_1rfz6w8">\n      <bpmn:incoming>SequenceFlow_06osrd7</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_06osrd7" sourceRef="Task_1hm78g6" targetRef="EndEvent_1rfz6w8" />\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="173" y="102" width="36" height="36" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Task_1hm78g6_di" bpmnElement="Task_1hm78g6">\n        <dc:Bounds x="275" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_005ctt4_di" bpmnElement="SequenceFlow_005ctt4">\n        <di:waypoint xsi:type="dc:Point" x="209" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="275" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="242" y="98" width="0" height="13" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_1rfz6w8_di" bpmnElement="EndEvent_1rfz6w8">\n        <dc:Bounds x="427" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="445" y="141" width="0" height="13" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_06osrd7_di" bpmnElement="SequenceFlow_06osrd7">\n        <di:waypoint xsi:type="dc:Point" x="375" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="427" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="401" y="98" width="0" height="13" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>\n',
  name: 'Sample_contract'
}
```

When this object is passed to the `compile()` function it returns an object with three values `Solidity code`,`ByteCode`, `ABI`

For example </n>
```JavaScript
const contract = compiler.compile(xml).then(contract => {
 console.log(contract);
})
```
This logs the output object.

## Acknowledgments
The *BPMN-Sol* is utilizing/forking the compiler of the [Caterpillar](https://github.com/orlenyslp/Caterpillar) engine.
We thank the Caterpillar creator for his great work.

## Contribution

Contributions are welcome. Make sure you run the tests before creating a pull request and add test cases that cover the contributed code.

To build *bpmn-sol* from its source files run ``npm run build``.

## Authors
* **Gowtham Mohan**
* Timotheus Kampik

