import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFirebaserulesRulesetArgsSourceFiles {
  content: string;
  fingerprint?: string;
  name: string;
}
export interface GoogleFirebaserulesRulesetArgsSource {
  language?: string;
  files: GoogleFirebaserulesRulesetArgsSourceFiles;
}
export interface GoogleFirebaserulesRulesetArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirebaserulesRulesetArgs {
  source: GoogleFirebaserulesRulesetArgsSource;
  timeouts: GoogleFirebaserulesRulesetArgsTimeouts;
}
export class google_firebaserules_ruleset extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly metadata!: any[];
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFirebaserulesRulesetArgs) {
    super(config, "resource", args, resourceName, "google_firebaserules_ruleset");
  }
}