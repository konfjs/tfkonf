import { TerraformConfig, TerraformResource } from "tfs";
export interface Subject {
  common_name?: string;
  country_code?: string;
  email?: string;
  locality?: string;
  org?: string;
  org_unit?: string;
  state?: string;
}
export interface SubjectAlternativeDnsNames {
  subject_alternative_name?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleApigeeKeystoresAliasesSelfSignedCertArgs {
  alias: string;
  cert_validity_in_days?: number;
  environment: string;
  key_size?: string;
  keystore: string;
  org_id: string;
  sig_alg: string;
  subject: Subject;
  subject_alternative_dns_names: SubjectAlternativeDnsNames;
  timeouts: Timeouts;
}
export class google_apigee_keystores_aliases_self_signed_cert extends TerraformResource {
  readonly certs_info!: any[];
  readonly id?: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeKeystoresAliasesSelfSignedCertArgs) {
    super(config, "resource", args, resourceName, "google_apigee_keystores_aliases_self_signed_cert");
  }
}