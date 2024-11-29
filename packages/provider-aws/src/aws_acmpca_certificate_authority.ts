import { TerraformConfig, TerraformResource } from "tfs";
export interface Subject {
  common_name?: string;
  country?: string;
  distinguished_name_qualifier?: string;
  generation_qualifier?: string;
  given_name?: string;
  initials?: string;
  locality?: string;
  organization?: string;
  organizational_unit?: string;
  pseudonym?: string;
  state?: string;
  surname?: string;
  title?: string;
}
export interface CertificateAuthorityConfiguration {
  key_algorithm: string;
  signing_algorithm: string;
  subject: Subject;
}
export interface CrlConfiguration {
  custom_cname?: string;
  enabled?: boolean;
  expiration_in_days?: number;
  s3_bucket_name?: string;
}
export interface OcspConfiguration {
  enabled: boolean;
  ocsp_custom_cname?: string;
}
export interface RevocationConfiguration {
  crl_configuration: CrlConfiguration;
  ocsp_configuration: OcspConfiguration;
}
export interface Timeouts {
  create?: string;
}
export interface AwsAcmpcaCertificateAuthorityArgs {
  enabled?: boolean;
  permanent_deletion_time_in_days?: number;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  certificate_authority_configuration: CertificateAuthorityConfiguration;
  revocation_configuration: RevocationConfiguration;
  timeouts: Timeouts;
}
export class aws_acmpca_certificate_authority extends TerraformResource {
  readonly arn!: string;
  readonly certificate!: string;
  readonly certificate_chain!: string;
  readonly certificate_signing_request!: string;
  readonly id?: string;
  readonly key_storage_security_standard?: string;
  readonly not_after!: string;
  readonly not_before!: string;
  readonly serial!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly usage_mode?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmpcaCertificateAuthorityArgs) {
    super(config, "resource", args, resourceName, "aws_acmpca_certificate_authority");
  }
}