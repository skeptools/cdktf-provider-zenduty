import { CdktfProviderProject } from "@cdktf/provider-project";
import { NpmAccess } from "projen/lib/javascript";

const project = new CdktfProviderProject({
  author: "Ryan Martin",
  authorAddress: "rlmartin@gmail.com",
  cdktfVersion: "^0.14.0",
  constructsVersion: "^10.0.0",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project@0.5.0"],
  name: "@skeptools/cdktf-provider-zenduty",
  githubNamespace: "skeptools",
  projenrcTs: true,
  repositoryUrl: "git@github.com:skeptools/cdktf-provider-zenduty.git",
  terraformProvider: "Zenduty/zenduty@~> 0",
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();