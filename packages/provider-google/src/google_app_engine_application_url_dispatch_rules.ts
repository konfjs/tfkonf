import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleAppEngineApplicationUrlDispatchRulesArgsDispatchRules {
  domain?: string;
  path: string;
  service: string;
}
export interface GoogleAppEngineApplicationUrlDispatchRulesArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineApplicationUrlDispatchRulesArgs {
  dispatch_rules: GoogleAppEngineApplicationUrlDispatchRulesArgsDispatchRules;
  timeouts: GoogleAppEngineApplicationUrlDispatchRulesArgstimeouts;
}
export class google_app_engine_application_url_dispatch_rules extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineApplicationUrlDispatchRulesArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_application_url_dispatch_rules");
  }
}