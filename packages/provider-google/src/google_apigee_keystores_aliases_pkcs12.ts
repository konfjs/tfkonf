import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeKeystoresAliasesPkcs12Argstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeKeystoresAliasesPkcs12Args {
  alias: string;
  environment: string;
  file: string;
  filehash: string;
  keystore: string;
  org_id: string;
  timeouts: GoogleApigeeKeystoresAliasesPkcs12Argstimeouts;
}
export class google_apigee_keystores_aliases_pkcs12 extends TerraformResource {
  readonly certs_info!: any[];
  readonly id?: string;
  readonly password?: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeKeystoresAliasesPkcs12Args) {
    super(config, "resource", args, resourceName, "google_apigee_keystores_aliases_pkcs12");
  }
}