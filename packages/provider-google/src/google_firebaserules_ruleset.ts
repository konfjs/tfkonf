import { TerraformConfig, TerraformResource } from "tfs";
export interface Files {
  content: string;
  fingerprint?: string;
  name: string;
}
export interface Source {
  language?: string;
  files: Files;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleFirebaserulesRulesetArgs {
  source: Source;
  timeouts: Timeouts;
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