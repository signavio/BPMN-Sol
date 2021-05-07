import { compile } from "../index";
import xml from "./testXML";

describe("bpmn compilers", () => {
  it("BPMN 2.0 XMl is compiled to solidity smart contract", async () => {
    let contract = await compile(xml.xml);
    expect(contract).toBeDefined();
    expect(Object.keys(contract)).toEqual(["Solidity", "Bytecode", "ABI"]);
  });

  it("Compiler rejects with a compilation error when it fails to compile", async () => {
    try {
      await compile(xml.xmlWithError);
    } catch (error) {
      expect(error).toEqual({
        message: "Compilation error in smart contract"
      });
    }
  });
});
