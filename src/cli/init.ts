import * as path from "path";
import * as fs from "fs-extra";
import { CommandModule, Arguments, Argv, Options } from "yargs";

import { CDKTG_VERSION } from "../common";

interface InitOptions extends Options {
  language: string;
}

export class InitCommand<U extends InitOptions>
  implements CommandModule<{}, U>
{
  public command = "init";
  public describe = "create a new cdk-threagile project";

  builder = (args: Argv): Argv<U> => {
    args.option("language", {
      type: "string",
      describe: "",
      default: "typescript",
    });

    return args as unknown as Argv<U>;
  };

  public handler = async (args: Arguments<U>) => {
    const gitIgnoreContent = [
      "node_modules",
      ".env",
      ".venv",
      "dist",
      ".cdktg.out",
      ".DS_Store",
    ];
    const requirementsTxtContent = [
      "constructs>=10.0.0",
      `cdktg>=${CDKTG_VERSION}`,
    ];
    const envContent = "CDKTG_THREAGILE_BASE_URL=";

    fs.writeFileSync(".env", envContent);

    fs.writeFileSync(".gitignore", gitIgnoreContent.join("\n"));

    if (args.language === "python") {
      fs.writeFileSync("requirements.txt", requirementsTxtContent.join("\n"));

      fs.writeJSONSync("package.json", createPackageJson(args.language), {
        spaces: 4,
      });

      fs.writeFileSync(
        "threagile.py",
        `import cdktg

project = cdktg.Project()

# Define threat model here

project.synth()
`
      );

      return;
    }

    fs.writeJSONSync("package.json", createPackageJson(args.language), {
      spaces: 4,
    });

    fs.writeFileSync(
      "threagile.ts",
      `import { Project } from 'cdktg'

const project = new Project();

// Define threat model here

project.synth();
`
    );
  };
}

interface CdktgPackageJson {
  peerDependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

function createPackageJson(language: string) {
  const cdktgJson = fs.readJsonSync(
    path.join(__dirname, "..", "..", "package.json")
  ) as CdktgPackageJson;

  const scripts = {
    cdktg: "cdktg",
    synth: "cdktg synth threagile.ts",
    ping: "cdktg ping",
    "model:check": "cdktg check",
    "model:analyze": "cdktg analyze",
  };

  if (language === "python") {
    return {
      scripts,
      devDependencies: {
        cdktg: `^${CDKTG_VERSION}`,
      },
    };
  }

  return {
    scripts,
    dependencies: {
      cdktg: `^${CDKTG_VERSION}`,
      constructs: cdktgJson.peerDependencies.constructs,
    },
    devDependencies: {
      typescript: cdktgJson.devDependencies.typescript,
    },
  };
}
