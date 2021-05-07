const xml = {
  bpmn:
    '<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">\n  <bpmn:process id="Process_0" name="Process_0" isExecutable="false">\n    <bpmn:startEvent id="StartEvent_1">\n      <bpmn:outgoing>SequenceFlow_005ctt4</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:task id="Task_1hm78g6" name="a">\n      <bpmn:incoming>SequenceFlow_005ctt4</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_06osrd7</bpmn:outgoing>\n    </bpmn:task>\n    <bpmn:sequenceFlow id="SequenceFlow_005ctt4" sourceRef="StartEvent_1" targetRef="Task_1hm78g6" />\n    <bpmn:endEvent id="EndEvent_1rfz6w8">\n      <bpmn:incoming>SequenceFlow_06osrd7</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_06osrd7" sourceRef="Task_1hm78g6" targetRef="EndEvent_1rfz6w8" />\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="173" y="102" width="36" height="36" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Task_1hm78g6_di" bpmnElement="Task_1hm78g6">\n        <dc:Bounds x="275" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_005ctt4_di" bpmnElement="SequenceFlow_005ctt4">\n        <di:waypoint xsi:type="dc:Point" x="209" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="275" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="242" y="98" width="0" height="13" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_1rfz6w8_di" bpmnElement="EndEvent_1rfz6w8">\n        <dc:Bounds x="427" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="445" y="141" width="0" height="13" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_06osrd7_di" bpmnElement="SequenceFlow_06osrd7">\n        <di:waypoint xsi:type="dc:Point" x="375" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="427" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="401" y="98" width="0" height="13" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>\n',
  name: "Process_0"
};

const xmlWithError = {
  bpmn:
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:signavio="http://www.signavio.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" exporter="Signavio Process Editor, http://www.signavio.com" exporterVersion="14.16.3" expressionLanguage="http://www.w3.org/TR/XPath" id="Definitions_1" name="BPM17_Running_Example" targetNamespace="http://bpmn.io/schema/bpmn" typeLanguage="http://www.w3.org/2001/XMLSchema" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">\n' +
    '    <process id="BPM17_Running_Example" isClosed="false" isExecutable="false" name="BPM17_Running_Example" processType="None">\n' +
    "        <documentation><![CDATA[asd]]></documentation>\n" +
    "        <extensionElements>\n" +
    '            <signavio:signavioDiagramMetaData metaKey="meta-issue" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-versiondetails" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-diagramlink" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-functionalrequirement" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-reviewedby" metaValue="Reviewer"/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-kpi" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-testvalues" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-glossary" metaValue="[]"/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-owner" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-path" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-processid" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-story" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="prozessreifegrad" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="iso9000ff" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-externaldocuments" metaValue="[]"/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="processgoal" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-apqcreference22" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-processowner" metaValue=""/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="meta-writtenby" metaValue="Author"/>\n' +
    '            <signavio:signavioDiagramMetaData metaKey="revisionid" metaValue="8dbfdea35e4749f9b786c068bcbfe804"/>\n' +
    "        </extensionElements>\n" +
    '        <startEvent id="StartEvent_1" isInterrupting="true" name="">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="vorgngerprozesse" metaValue="[]"/>\n' +
    '                <signavio:signavioLabel align="left" ref="text_name" x="-30.0" y="33.0"/>\n' +
    "            </extensionElements>\n" +
    "            <outgoing>SequenceFlow_16ew9vc</outgoing>\n" +
    "        </startEvent>\n" +
    '        <userTask completionQuantity="1" id="Task_06xlgcp" implementation="##unspecified" isForCompensation="false" name="Enter userID" startQuantity="1">\n' +
    '            <documentation id="sid-a9cbaa6a-e5ed-4114-a44b-8f5860393463">(uint _userID) : (uint userID) -&gt; {userID = _userID; }</documentation>\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-issue" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-space" metaValue="\n' +
    '"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------"/>\n' +
    '                <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testvalues" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-story" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testfunction" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-risks" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-information2" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-image" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-specification" metaValue="{}"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>SequenceFlow_16ew9vc</incoming>\n" +
    "            <outgoing>sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9</outgoing>\n" +
    "        </userTask>\n" +
    '        <userTask completionQuantity="1" id="Task_15lfaes" implementation="##unspecified" isForCompensation="false" name="Confirm Acceptance" startQuantity="1">\n' +
    '            <documentation id="sid-69f547a0-8231-4367-8e83-b6c4dfc19a1c">(bool _confirmation) : (bool applicantEligible) -&gt; {applicantEligible = _confirmation; }</documentation>\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-issue" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-space" metaValue="\n' +
    '"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------"/>\n' +
    '                <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testvalues" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-story" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testfunction" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-risks" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-information2" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-image" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-specification" metaValue="{}"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-7CBD39BA-3DE6-4BD4-A25B-A3C0766179F7</incoming>\n" +
    "            <outgoing>sid-55A356A2-31D0-4410-ADE2-CD79800CD9E5</outgoing>\n" +
    "        </userTask>\n" +
    '        <userTask completionQuantity="1" id="sid-49D70FD4-00AF-40CD-B4B2-4C3473FD98D5" implementation="##unspecified" isForCompensation="false" name="Confirm Acceptance again" startQuantity="1">\n' +
    '            <documentation id="sid-62122c8e-7e03-4deb-bf3e-23b6376c2533">(bool _confirmation) : (bool applicantEligibleAgain) -&gt; {applicantEligibleAgain = _confirmation; }</documentation>\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-issue" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-space" metaValue="\n' +
    '"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------"/>\n' +
    '                <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testvalues" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-story" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testfunction" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-risks" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-information2" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-image" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-specification" metaValue="{}"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-1D0F52C9-1898-42CA-A087-A10E588CE079</incoming>\n" +
    "            <outgoing>sid-A4176612-C86B-4EF0-9082-B127E4F6B739</outgoing>\n" +
    "        </userTask>\n" +
    '        <scriptTask completionQuantity="1" id="Task_1ggq6sf" isForCompensation="false" name="Check userID" scriptFormat="" startQuantity="1">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-issue" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-space" metaValue="\n' +
    '"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------"/>\n' +
    '                <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testvalues" metaValue="{&quot;totalCount&quot;:2,&quot;items&quot;:[{&quot;outputs&quot;:[&quot;applicantEligible = false&quot;],&quot;inputs&quot;:[&quot;userID = 5&quot;]},{&quot;outputs&quot;:[&quot;applicantEligible = true&quot;],&quot;inputs&quot;:[&quot;userID = 15&quot;]}]}"/>\n' +
    '                <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-story" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testfunction" metaValue="if (userID >= 10) {\n' +
    "applicantEligible = true;\n" +
    "} else {\n" +
    "applicantEligible = false;\n" +
    "}\n" +
    ' return applicantEligible"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-risks" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-information2" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-image" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-specification" metaValue="{}"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9</incoming>\n" +
    "            <outgoing>SequenceFlow_0ensspb</outgoing>\n" +
    "            <script>if (userID &gt;= 10)\n" +
    "applicantEligible = true;\n" +
    "else\n" +
    "applicantEligible = false;</script>\n" +
    "        </scriptTask>\n" +
    '        <scriptTask completionQuantity="1" id="sid-D2009D9B-93A1-49FA-A407-DFFE07326FCA" isForCompensation="false" name="Check userID again" scriptFormat="" startQuantity="1">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#FFFFFF"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-issue" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-space" metaValue="\n' +
    '"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-line" metaValue="-----------------------------------------------------------------------------------------------------------"/>\n' +
    '                <signavio:signavioMetaData metaKey="erteiltfreigabe" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdkonsultiert" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testvalues" metaValue="{&quot;totalCount&quot;:2,&quot;items&quot;:[{&quot;outputs&quot;:[&quot;applicantEligible = false&quot;],&quot;inputs&quot;:[&quot;userID = 10&quot;]},{&quot;outputs&quot;:[&quot;applicantEligible = true&quot;],&quot;inputs&quot;:[&quot;userID = 25&quot;]}]}"/>\n' +
    '                <signavio:signavioMetaData metaKey="externaldocuments" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-accountable" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-story" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-consulted" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-testfunction" metaValue="if (userID >= 20) {\n' +
    "applicantEligible = true;\n" +
    "} else {\n" +
    "applicantEligible = false;\n" +
    "}\n" +
    ' return applicantEligible"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-informed" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-risks" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-information2" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-relateddoc" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-tcode" metaValue="[]"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-image" metaValue=""/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-specification" metaValue="{}"/>\n' +
    '                <signavio:signavioMetaData metaKey="wirdinformiert" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-E2455560-E725-468F-A93D-388511DDC383</incoming>\n" +
    "            <outgoing>sid-0324F056-7773-4495-8D20-A6BADA458A88</outgoing>\n" +
    "            <script>if (userID &gt;= 20)\n" +
    "applicantEligible = true;\n" +
    "else\n" +
    "applicantEligible = false;</script>\n" +
    "        </scriptTask>\n" +
    '        <exclusiveGateway gatewayDirection="Diverging" id="ExclusiveGateway_06dboho" name="entryGateway1">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioLabel ref="text_name" x="-25.0" y="45.0"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>SequenceFlow_0ensspb</incoming>\n" +
    "            <outgoing>sid-E75E7BB4-DA1C-4D89-B328-C5F152BF1C47</outgoing>\n" +
    "            <outgoing>sid-7CBD39BA-3DE6-4BD4-A25B-A3C0766179F7</outgoing>\n" +
    "        </exclusiveGateway>\n" +
    '        <exclusiveGateway gatewayDirection="Diverging" id="sid-EB0DD07E-7CB3-4195-95F9-AE2752AE3EF2" name="entryGateway2">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    '                <signavio:signavioLabel ref="text_name" x="-25.0" y="45.0"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-0324F056-7773-4495-8D20-A6BADA458A88</incoming>\n" +
    "            <outgoing>sid-23189D12-15F0-4FCF-9A4C-AF9FC52DFFC0</outgoing>\n" +
    "            <outgoing>sid-1D0F52C9-1898-42CA-A087-A10E588CE079</outgoing>\n" +
    "        </exclusiveGateway>\n" +
    '        <exclusiveGateway gatewayDirection="Diverging" id="sid-712ABF4C-5996-4F28-8D25-7D004CCF9C4D" name="exitGateway1">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-55A356A2-31D0-4410-ADE2-CD79800CD9E5</incoming>\n" +
    "            <outgoing>sid-265835AB-ED7F-454E-B034-52B769B6BAD1</outgoing>\n" +
    "            <outgoing>sid-E2455560-E725-468F-A93D-388511DDC383</outgoing>\n" +
    "        </exclusiveGateway>\n" +
    '        <exclusiveGateway gatewayDirection="Diverging" id="sid-D7E35590-0A82-4DF5-96A0-DCBAD4FC009A" name="exitGateway2">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="meta-changerequests" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-A4176612-C86B-4EF0-9082-B127E4F6B739</incoming>\n" +
    "            <outgoing>sid-E6242C16-BE5E-42DE-8163-3AFD88EBA7DB</outgoing>\n" +
    "            <outgoing>sid-88D1D644-5335-4844-94EC-DE3E35C95B12</outgoing>\n" +
    "        </exclusiveGateway>\n" +
    '        <endEvent id="sid-8A6BCFFF-25FD-4704-974B-0AF053657318" name="accept">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="nachfolgerprozesse" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-88D1D644-5335-4844-94EC-DE3E35C95B12</incoming>\n" +
    "        </endEvent>\n" +
    '        <endEvent id="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89" name="reject\n' +
    '">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bgcolor" metaValue="#ffffff"/>\n' +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioMetaData metaKey="nachfolgerprozesse" metaValue="[]"/>\n' +
    "            </extensionElements>\n" +
    "            <incoming>sid-E6242C16-BE5E-42DE-8163-3AFD88EBA7DB</incoming>\n" +
    "            <incoming>sid-23189D12-15F0-4FCF-9A4C-AF9FC52DFFC0</incoming>\n" +
    "            <incoming>sid-E75E7BB4-DA1C-4D89-B328-C5F152BF1C47</incoming>\n" +
    "            <incoming>sid-265835AB-ED7F-454E-B034-52B769B6BAD1</incoming>\n" +
    "        </endEvent>\n" +
    '        <sequenceFlow id="SequenceFlow_16ew9vc" isImmediate="true" name="" sourceRef="StartEvent_1" targetRef="Task_06xlgcp">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioLabel align="left" ref="text_name" valign="top" x="215.4832356975972" y="221.0"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9" isImmediate="true" name="" sourceRef="Task_06xlgcp" targetRef="Task_1ggq6sf">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="SequenceFlow_0ensspb" isImmediate="true" name="" sourceRef="Task_1ggq6sf" targetRef="ExclusiveGateway_06dboho">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioLabel align="left" ref="text_name" valign="top" x="657.0" y="221.0"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-0324F056-7773-4495-8D20-A6BADA458A88" isImmediate="true" name="" sourceRef="sid-D2009D9B-93A1-49FA-A407-DFFE07326FCA" targetRef="sid-EB0DD07E-7CB3-4195-95F9-AE2752AE3EF2">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioLabel align="left" ref="text_name" valign="top" x="1709.5768172037879" y="617.3437260696592"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-55A356A2-31D0-4410-ADE2-CD79800CD9E5" name="" sourceRef="Task_15lfaes" targetRef="sid-712ABF4C-5996-4F28-8D25-7D004CCF9C4D">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-A4176612-C86B-4EF0-9082-B127E4F6B739" name="" sourceRef="sid-49D70FD4-00AF-40CD-B4B2-4C3473FD98D5" targetRef="sid-D7E35590-0A82-4DF5-96A0-DCBAD4FC009A">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-E6242C16-BE5E-42DE-8163-3AFD88EBA7DB" name="applicantEligible" sourceRef="sid-D7E35590-0A82-4DF5-96A0-DCBAD4FC009A" targetRef="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-88D1D644-5335-4844-94EC-DE3E35C95B12" name="applicantEligible" sourceRef="sid-D7E35590-0A82-4DF5-96A0-DCBAD4FC009A" targetRef="sid-8A6BCFFF-25FD-4704-974B-0AF053657318">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-23189D12-15F0-4FCF-9A4C-AF9FC52DFFC0" name="applicantEligible" sourceRef="sid-EB0DD07E-7CB3-4195-95F9-AE2752AE3EF2" targetRef="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioLabel align="left" distance="7.5" from="0" orientation="ul" ref="text_name" to="1" valign="top" x="1313.5" y="267.0"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-1D0F52C9-1898-42CA-A087-A10E588CE079" isImmediate="true" name="applicantEligible" sourceRef="sid-EB0DD07E-7CB3-4195-95F9-AE2752AE3EF2" targetRef="sid-49D70FD4-00AF-40CD-B4B2-4C3473FD98D5">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioLabel align="left" distance="6.0" from="1" orientation="lr" ref="text_name" to="2" valign="bottom" x="1363.765625" y="82.0"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-E75E7BB4-DA1C-4D89-B328-C5F152BF1C47" name="applicantEligible" sourceRef="ExclusiveGateway_06dboho" targetRef="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    '                <signavio:signavioLabel align="left" distance="-7.0" from="1" orientation="ul" ref="text_name" to="2" valign="top" x="769.0" y="334.0"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-7CBD39BA-3DE6-4BD4-A25B-A3C0766179F7" isImmediate="true" name="applicantEligible" sourceRef="ExclusiveGateway_06dboho" targetRef="Task_15lfaes">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-265835AB-ED7F-454E-B034-52B769B6BAD1" name="applicantEligible" sourceRef="sid-712ABF4C-5996-4F28-8D25-7D004CCF9C4D" targetRef="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    '        <sequenceFlow id="sid-E2455560-E725-468F-A93D-388511DDC383" name="applicantEligible" sourceRef="sid-712ABF4C-5996-4F28-8D25-7D004CCF9C4D" targetRef="sid-D2009D9B-93A1-49FA-A407-DFFE07326FCA">\n' +
    "            <extensionElements>\n" +
    '                <signavio:signavioMetaData metaKey="bordercolor" metaValue="#000000"/>\n' +
    "            </extensionElements>\n" +
    "        </sequenceFlow>\n" +
    "    </process>\n" +
    '    <bpmndi:BPMNDiagram id="sid-2f644ffe-7cae-4a2a-acf2-bb2177908183" name="BPM17_Running_Example">\n' +
    '        <bpmndi:BPMNPlane bpmnElement="BPM17_Running_Example" id="sid-6de2f753-51ea-4a32-b8b0-e8e579afd44e">\n' +
    '            <bpmndi:BPMNShape bpmnElement="StartEvent_1" id="StartEvent_1_gui">\n' +
    '                <omgdc:Bounds height="30.0" width="30.0" x="329.0" y="221.0"/>\n' +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="Task_06xlgcp" id="Task_06xlgcp_gui">\n' +
    '                <omgdc:Bounds height="80.0" width="100.0" x="421.0" y="196.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-c81ffdd8-f7b3-4e52-8121-cc20b01822d7">\n' +
    '                    <omgdc:Bounds height="12.0" width="69.42857360839844" x="436.2857131958008" y="228.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="Task_1ggq6sf" id="Task_1ggq6sf_gui">\n' +
    '                <omgdc:Bounds height="80.0" width="100.0" x="583.0" y="196.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-c81ffdd8-f7b3-4e52-8121-cc20b01822d7">\n' +
    '                    <omgdc:Bounds height="12.0" width="72.5142822265625" x="596.7428588867188" y="228.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="ExclusiveGateway_06dboho" id="ExclusiveGateway_06dboho_gui" isMarkerVisible="true">\n' +
    '                <omgdc:Bounds height="40.0" width="40.0" x="726.0" y="216.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="81.77143096923828" x="701.0" y="261.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="Task_15lfaes" id="Task_15lfaes_gui">\n' +
    '                <omgdc:Bounds height="80.0" width="100.0" x="852.0" y="120.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-c81ffdd8-f7b3-4e52-8121-cc20b01822d7">\n' +
    '                    <omgdc:Bounds height="24.0" width="60.94285583496094" x="871.5285720825195" y="146.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-D2009D9B-93A1-49FA-A407-DFFE07326FCA" id="sid-D2009D9B-93A1-49FA-A407-DFFE07326FCA_gui">\n' +
    '                <omgdc:Bounds height="80.0" width="100.0" x="1160.0" y="120.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-c81ffdd8-f7b3-4e52-8121-cc20b01822d7">\n' +
    '                    <omgdc:Bounds height="24.0" width="72.5142822265625" x="1173.7428588867188" y="146.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-EB0DD07E-7CB3-4195-95F9-AE2752AE3EF2" id="sid-EB0DD07E-7CB3-4195-95F9-AE2752AE3EF2_gui" isMarkerVisible="true">\n' +
    '                <omgdc:Bounds height="40.0" width="40.0" x="1293.0" y="140.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="81.77143096923828" x="1268.0" y="185.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-49D70FD4-00AF-40CD-B4B2-4C3473FD98D5" id="sid-49D70FD4-00AF-40CD-B4B2-4C3473FD98D5_gui">\n' +
    '                <omgdc:Bounds height="80.0" width="100.0" x="1419.0" y="42.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-c81ffdd8-f7b3-4e52-8121-cc20b01822d7">\n' +
    '                    <omgdc:Bounds height="36.0" width="60.94285583496094" x="1438.5285720825195" y="62.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-8A6BCFFF-25FD-4704-974B-0AF053657318" id="sid-8A6BCFFF-25FD-4704-974B-0AF053657318_gui">\n' +
    '                <omgdc:Bounds height="28.0" width="28.0" x="1780.0" y="68.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="11.0" width="31.821426391601562" x="1778.0892868041992" y="98.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89" id="sid-689CD14D-3465-43AB-BC1D-22D232DDAB89_gui">\n' +
    '                <omgdc:Bounds height="28.0" width="28.0" x="1720.0" y="320.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="11.0" width="28.28571319580078" x="1719.8571434020996" y="350.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-712ABF4C-5996-4F28-8D25-7D004CCF9C4D" id="sid-712ABF4C-5996-4F28-8D25-7D004CCF9C4D_gui" isMarkerVisible="true">\n' +
    '                <omgdc:Bounds height="40.0" width="40.0" x="1020.0" y="140.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="73.28571319580078" x="1050.5" y="170.5"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNShape bpmnElement="sid-D7E35590-0A82-4DF5-96A0-DCBAD4FC009A" id="sid-D7E35590-0A82-4DF5-96A0-DCBAD4FC009A_gui" isMarkerVisible="true">\n' +
    '                <omgdc:Bounds height="40.0" width="40.0" x="1605.0" y="62.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="73.28571319580078" x="1635.5" y="92.5"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNShape>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="SequenceFlow_16ew9vc" id="SequenceFlow_16ew9vc_gui">\n' +
    '                <omgdi:waypoint x="359.0" y="236.0"/>\n' +
    '                <omgdi:waypoint x="421.0" y="236.0"/>\n' +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9" id="sid-ABC11D1A-273B-4A2E-80B8-A1577A984FD9_gui">\n' +
    '                <omgdi:waypoint x="521.0" y="236.0"/>\n' +
    '                <omgdi:waypoint x="583.0" y="236.0"/>\n' +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="SequenceFlow_0ensspb" id="SequenceFlow_0ensspb_gui">\n' +
    '                <omgdi:waypoint x="683.0" y="236.0"/>\n' +
    '                <omgdi:waypoint x="726.0" y="236.0"/>\n' +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-0324F056-7773-4495-8D20-A6BADA458A88" id="sid-0324F056-7773-4495-8D20-A6BADA458A88_gui">\n' +
    '                <omgdi:waypoint x="1260.0" y="160.0"/>\n' +
    '                <omgdi:waypoint x="1293.0" y="160.0"/>\n' +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-55A356A2-31D0-4410-ADE2-CD79800CD9E5" id="sid-55A356A2-31D0-4410-ADE2-CD79800CD9E5_gui">\n' +
    '                <omgdi:waypoint x="952.0" y="160.18050541516246"/>\n' +
    '                <omgdi:waypoint x="1020.0" y="160.4259927797834"/>\n' +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-A4176612-C86B-4EF0-9082-B127E4F6B739" id="sid-A4176612-C86B-4EF0-9082-B127E4F6B739_gui">\n' +
    '                <omgdi:waypoint x="1519.0" y="82.15974440894568"/>\n' +
    '                <omgdi:waypoint x="1605.0" y="82.43450479233226"/>\n' +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-E6242C16-BE5E-42DE-8163-3AFD88EBA7DB" id="sid-E6242C16-BE5E-42DE-8163-3AFD88EBA7DB_gui">\n' +
    '                <omgdi:waypoint x="1625.5" y="102.0"/>\n' +
    '                <omgdi:waypoint x="1625.5" y="334.0"/>\n' +
    '                <omgdi:waypoint x="1720.0" y="334.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="84.085693359375" width="12.0" x="1605.5" y="110.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-88D1D644-5335-4844-94EC-DE3E35C95B12" id="sid-88D1D644-5335-4844-94EC-DE3E35C95B12_gui">\n' +
    '                <omgdi:waypoint x="1645.0" y="82.44213649851632"/>\n' +
    '                <omgdi:waypoint x="1780.0" y="82.04154302670624"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.249453785559211" width="84.12093065613817" x="1652.8855643915292" y="62.16884495771605"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-23189D12-15F0-4FCF-9A4C-AF9FC52DFFC0" id="sid-23189D12-15F0-4FCF-9A4C-AF9FC52DFFC0_gui">\n' +
    '                <omgdi:waypoint x="1313.5" y="180.0"/>\n' +
    '                <omgdi:waypoint x="1313.5" y="334.0"/>\n' +
    '                <omgdi:waypoint x="1720.0" y="334.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="84.085693359375" x="1321.0" y="267.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-1D0F52C9-1898-42CA-A087-A10E588CE079" id="sid-1D0F52C9-1898-42CA-A087-A10E588CE079_gui">\n' +
    '                <omgdi:waypoint x="1313.0" y="140.0"/>\n' +
    '                <omgdi:waypoint x="1313.0" y="82.0"/>\n' +
    '                <omgdi:waypoint x="1419.0" y="82.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="84.085693359375" x="1279.6800537109375" y="64.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-E75E7BB4-DA1C-4D89-B328-C5F152BF1C47" id="sid-E75E7BB4-DA1C-4D89-B328-C5F152BF1C47_gui">\n' +
    '                <omgdi:waypoint x="746.5" y="256.0"/>\n' +
    '                <omgdi:waypoint x="746.5" y="334.0"/>\n' +
    '                <omgdi:waypoint x="1720.0" y="334.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.0" width="84.085693359375" x="769.0" y="341.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-7CBD39BA-3DE6-4BD4-A25B-A3C0766179F7" id="sid-7CBD39BA-3DE6-4BD4-A25B-A3C0766179F7_gui">\n' +
    '                <omgdi:waypoint x="746.0" y="216.0"/>\n' +
    '                <omgdi:waypoint x="746.0" y="160.0"/>\n' +
    '                <omgdi:waypoint x="852.0" y="160.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="84.085693359375" width="12.0" x="726.0" y="124.414306640625"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-265835AB-ED7F-454E-B034-52B769B6BAD1" id="sid-265835AB-ED7F-454E-B034-52B769B6BAD1_gui">\n' +
    '                <omgdi:waypoint x="1040.5" y="180.0"/>\n' +
    '                <omgdi:waypoint x="1040.5" y="334.0"/>\n' +
    '                <omgdi:waypoint x="1720.0" y="334.0"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="84.085693359375" width="12.0" x="1020.5" y="188.0"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    '            <bpmndi:BPMNEdge bpmnElement="sid-E2455560-E725-468F-A93D-388511DDC383" id="sid-E2455560-E725-468F-A93D-388511DDC383_gui">\n' +
    '                <omgdi:waypoint x="1060.0" y="160.44247787610618"/>\n' +
    '                <omgdi:waypoint x="1160.0" y="160.14749262536873"/>\n' +
    '                <bpmndi:BPMNLabel labelStyle="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '                    <omgdc:Bounds height="12.24797645331273" width="84.12072410725773" x="1067.8859182741644" y="140.17145525620748"/>\n' +
    "                </bpmndi:BPMNLabel>\n" +
    "            </bpmndi:BPMNEdge>\n" +
    "        </bpmndi:BPMNPlane>\n" +
    '        <bpmndi:BPMNLabelStyle id="sid-525250a4-0c8e-4cbe-af1a-3a0aae2e69b2">\n' +
    '            <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>\n' +
    "        </bpmndi:BPMNLabelStyle>\n" +
    '        <bpmndi:BPMNLabelStyle id="sid-c81ffdd8-f7b3-4e52-8121-cc20b01822d7">\n' +
    '            <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>\n' +
    "        </bpmndi:BPMNLabelStyle>\n" +
    "    </bpmndi:BPMNDiagram>\n" +
    "</definitions>",
  name: "asd"
};

export default { xml, xmlWithError };
