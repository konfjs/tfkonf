import { TerraformConfig, TerraformResource } from "tfs";
export interface CertInfo {}
export interface CertsInfo {
  cert_info: CertInfo;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleApigeeKeystoresAliasesKeyCertFileArgs {
  alias: string;
  cert: string;
  environment: string;
  key?: string;
  keystore: string;
  org_id: string;
  password?: string;
  certs_info: CertsInfo;
  timeouts: Timeouts;
}
export class google_apigee_keystores_aliases_key_cert_file extends TerraformResource {
  readonly id?: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeKeystoresAliasesKeyCertFileArgs) {
    super(config, "resource", args, resourceName, "google_apigee_keystores_aliases_key_cert_file");
  }
}