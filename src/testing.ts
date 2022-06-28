import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Author } from "./author";

import { Model, BusinessCriticality } from "./model";
import { Project } from "./project";

/**
 * Testing utilities for cdktg models.
 */
export class Testing {
  public static model(): Model {
    const projet = new Project({
      outdir: fs.mkdtempSync(path.join(os.tmpdir(), "cdktg.outdir.")),
    });

    return new Model(projet, "TestModel", {
      version: "1.0.0",
      date: "2020-03-31",
      author: new Author({
        name: "John Doe",
      }),
      businessCriticality: BusinessCriticality.IMPORTANT,
    });
  }

  private constructor() {
    return;
  }
}
