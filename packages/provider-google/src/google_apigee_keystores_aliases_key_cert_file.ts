import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfoCertInfo {}
export interface GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfo {
  cert_info: GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfoCertInfo;
}
export interface GoogleApigeeKeystoresAliasesKeyCertFileArgsTimeouts {
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
  certs_info: GoogleApigeeKeystoresAliasesKeyCertFileArgsCertsInfo;
  timeouts: GoogleApigeeKeystoresAliasesKeyCertFileArgsTimeouts;
}
export class google_apigee_keystores_aliases_key_cert_file extends TerraformResource {
  readonly id?: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeKeystoresAliasesKeyCertFileArgs) {
    super(config, "resource", args, resourceName, "google_apigee_keystores_aliases_key_cert_file");
  }
}