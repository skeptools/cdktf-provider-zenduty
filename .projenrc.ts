import { CdktfProviderProject } from "@cdktf/provider-project";
const project = new CdktfProviderProject({
  author: "Ryan Martin",
  authorAddress: "ryan@vestahealthcare.com",
  defaultReleaseBranch: "main",
  devDeps: ["@cdktf/provider-project"],
  name: "cdktf-provider-zenduty",
  projenrcTs: true,
  repositoryUrl: "git@github.com:skeptools/cdktf-provider-zenduty.git",
  terraformProvider: "Zenduty/zenduty@~> 0",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();