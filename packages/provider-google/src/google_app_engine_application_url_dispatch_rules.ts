import { TerraformConfig, TerraformResource } from "tfs";
export interface DispatchRules {
  domain?: string;
  path: string;
  service: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineApplicationUrlDispatchRulesArgs {
  dispatch_rules: DispatchRules;
  timeouts: Timeouts;
}
export class google_app_engine_application_url_dispatch_rules extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineApplicationUrlDispatchRulesArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_application_url_dispatch_rules");
  }
}