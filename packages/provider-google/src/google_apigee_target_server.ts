import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApigeeTargetServerArgsSSlInfoCommonName {
  value?: string;
  wildcard_match?: boolean;
}
export interface GoogleApigeeTargetServerArgsSSlInfo {
  ciphers?: string[];
  client_auth_enabled?: boolean;
  enabled: boolean;
  ignore_validation_errors?: boolean;
  key_alias?: string;
  key_store?: string;
  protocols?: string[];
  trust_store?: string;
  common_name: GoogleApigeeTargetServerArgsSSlInfoCommonName;
}
export interface GoogleApigeeTargetServerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeTargetServerArgs {
  description?: string;
  env_id: string;
  host: string;
  is_enabled?: boolean;
  name: string;
  port: number;
  s_sl_info: GoogleApigeeTargetServerArgsSSlInfo;
  timeouts?: GoogleApigeeTargetServerArgsTimeouts;
}
export class google_apigee_target_server extends TerraformResource {
  readonly id?: string;
  readonly protocol?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeTargetServerArgs) {
    super(config, "resource", args, resourceName, "google_apigee_target_server");
  }
}