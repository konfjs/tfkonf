import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleAppEngineApplicationUrlDispatchRulesArgsDispatchRules {
  domain?: string;
  path: string;
  service: string;
}
export interface GoogleAppEngineApplicationUrlDispatchRulesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleAppEngineApplicationUrlDispatchRulesArgs {
  dispatch_rules: GoogleAppEngineApplicationUrlDispatchRulesArgsDispatchRules;
  timeouts?: GoogleAppEngineApplicationUrlDispatchRulesArgsTimeouts;
}
export class google_app_engine_application_url_dispatch_rules extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineApplicationUrlDispatchRulesArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_application_url_dispatch_rules");
  }
}