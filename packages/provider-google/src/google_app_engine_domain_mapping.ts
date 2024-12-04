import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAppEngineDomainMappingArgsSslSettings {
  ssl_management_type: string;
}

export interface GoogleAppEngineDomainMappingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAppEngineDomainMappingArgs {
  domain_name: string;
  override_strategy?: string;
  ssl_settings: GoogleAppEngineDomainMappingArgsSslSettings;
  timeouts?: GoogleAppEngineDomainMappingArgsTimeouts;
}

export class google_app_engine_domain_mapping extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly resource_records!: any[];

  constructor(config: TerraformConfig, resourceName: string, args: GoogleAppEngineDomainMappingArgs) {
    super(config, "resource", args, resourceName, "google_app_engine_domain_mapping");
  }
}
