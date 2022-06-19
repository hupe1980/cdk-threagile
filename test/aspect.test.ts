import { Construct, IConstruct } from "constructs";

import {
  AnnotationMetadataEntryType,
  Aspects,
  Author,
  BusinessCriticality,
  IAspect,
  Model,
  Project,
} from "../src";

class MyConstruct extends Construct {
  public static IsMyConstruct(x: any): x is MyConstruct {
    return x.visitCounter !== undefined;
  }
  public visitCounter: number = 0;
}

class VisitOnce implements IAspect {
  public visit(node: IConstruct): void {
    console.log("AAAABBBCCC");
    if (MyConstruct.IsMyConstruct(node)) {
      node.visitCounter += 1;
    }
  }
}

class MyAspect implements IAspect {
  public visit(node: IConstruct): void {
    node.node.addMetadata("foo", "bar");
  }
}

describe("aspect", () => {
  test("Aspects are invoked only once", () => {
    const project = new Project({
      outdir: "dist/aspect",
    });

    const model = new Model(project, "Model", {
      author: new Author({ name: "UnitTest" }),
      businessCriticality: BusinessCriticality.ARCHIVE,
      version: "1.0.0",
    });

    const root = new MyConstruct(model, "MyConstruct");

    Aspects.of(root).add(new VisitOnce());

    project.synth();
    expect(root.visitCounter).toEqual(1);

    project.synth();
    expect(root.visitCounter).toEqual(1);
  });

  test("Warn if an Aspect is added via another Aspect", () => {
    const project = new Project({
      outdir: "dist/aspect",
    });

    const model = new Model(project, "Model", {
      author: new Author({ name: "UnitTest" }),
      businessCriticality: BusinessCriticality.ARCHIVE,
      version: "1.0.0",
    });

    const root = new MyConstruct(model, "MyConstruct");
    const child = new MyConstruct(root, "ChildConstruct");

    Aspects.of(root).add({
      visit(construct: IConstruct) {
        Aspects.of(construct).add({
          visit(inner: IConstruct) {
            inner.node.addMetadata("test", "would-be-ignored");
          },
        });
      },
    });

    project.synth();

    expect(root.node.metadata[0].type).toEqual(
      AnnotationMetadataEntryType.WARN
    );
    expect(root.node.metadata[0].data).toEqual(
      "We detected an Aspect was added via another Aspect, and will not be applied"
    );
    // warning is not added to child construct
    expect(child.node.metadata.length).toEqual(0);
  });

  test("Do not warn if an Aspect is added directly (not by another aspect)", () => {
    const project = new Project({
      outdir: "dist/aspect",
    });

    const model = new Model(project, "Model", {
      author: new Author({ name: "UnitTest" }),
      businessCriticality: BusinessCriticality.ARCHIVE,
      version: "1.0.0",
    });

    const root = new MyConstruct(model, "Construct");
    const child = new MyConstruct(root, "ChildConstruct");

    Aspects.of(root).add(new MyAspect());

    project.synth();

    expect(root.node.metadata[0].type).toEqual("foo");
    expect(root.node.metadata[0].data).toEqual("bar");
    expect(child.node.metadata[0].type).toEqual("foo");
    expect(child.node.metadata[0].data).toEqual("bar");
    // no warning is added
    expect(root.node.metadata.length).toEqual(1);
    expect(child.node.metadata.length).toEqual(1);
  });
});
