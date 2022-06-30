import { IConstruct } from "constructs";
import { Annotations } from "./annotations";
import { IAspect } from "./aspect";
import { Communication } from "./communication";

export class RiskAspect implements IAspect {
  visit(node: IConstruct): void {
    if (Communication.isCommunicationl(node)) {
      // When a technical communication link does not send or receive any data assets, this is
      // an indicator for an unnecessary communication link (or for an incomplete model).
      if (!node.hasDataAssets()) {
        Annotations.of(node).addWarning("Unnecessary Communication Link");
      }
    }
  }
}
