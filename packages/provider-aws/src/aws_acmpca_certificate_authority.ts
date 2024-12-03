import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfigurationSubject {
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
export interface AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfiguration {
  key_algorithm: string;
  signing_algorithm: string;
  subject: AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfigurationSubject;
}
export interface AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationCrlConfiguration {
  custom_cname?: string;
  enabled?: boolean;
  expiration_in_days?: number;
  s3_bucket_name?: string;
}
export interface AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationOcspConfiguration {
  enabled: boolean;
  ocsp_custom_cname?: string;
}
export interface AwsAcmpcaCertificateAuthorityArgsRevocationConfiguration {
  crl_configuration: AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationCrlConfiguration;
  ocsp_configuration: AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationOcspConfiguration;
}
export interface AwsAcmpcaCertificateAuthorityArgsTimeouts {
  create?: string;
}
export interface AwsAcmpcaCertificateAuthorityArgs {
  enabled?: boolean;
  permanent_deletion_time_in_days?: number;
  tags?: {
    [key: string]: string;
  };
  type?: string;
  certificate_authority_configuration: AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfiguration;
  revocation_configuration: AwsAcmpcaCertificateAuthorityArgsRevocationConfiguration;
  timeouts?: AwsAcmpcaCertificateAuthorityArgsTimeouts;
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