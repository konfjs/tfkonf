import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleFirebaserulesRulesetArgssourcefiles {
  content: string;
  fingerprint?: string;
  name: string;
}
export interface GoogleFirebaserulesRulesetArgssource {
  language?: string;
  files: GoogleFirebaserulesRulesetArgssourcefiles;
}
export interface GoogleFirebaserulesRulesetArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirebaserulesRulesetArgs {
  source: GoogleFirebaserulesRulesetArgssource;
  timeouts: GoogleFirebaserulesRulesetArgstimeouts;
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