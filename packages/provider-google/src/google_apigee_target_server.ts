import { TerraformConfig, TerraformResource } from "tfs";
export interface CommonName {
  value?: string;
  wildcard_match?: boolean;
}
export interface SSlInfo {
  ciphers?: string[];
  client_auth_enabled?: boolean;
  enabled: boolean;
  ignore_validation_errors?: boolean;
  key_alias?: string;
  key_store?: string;
  protocols?: string[];
  trust_store?: string;
  common_name: CommonName;
}
export interface Timeouts {
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
  s_sl_info: SSlInfo;
  timeouts: Timeouts;
}
export class google_apigee_target_server extends TerraformResource {
  readonly id?: string;
  readonly protocol?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeTargetServerArgs) {
    super(config, "resource", args, resourceName, "google_apigee_target_server");
  }
}