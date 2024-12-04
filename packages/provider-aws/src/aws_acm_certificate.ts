import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAcmCertificateArgsOptions {
  certificate_transparency_logging_preference?: string;
}

export interface AwsAcmCertificateArgsValidationOption {
  domain_name: string;
  validation_domain: string;
}

export interface AwsAcmCertificateArgs {
  certificate_authority_arn?: string;
  certificate_body?: string;
  certificate_chain?: string;
  early_renewal_duration?: string;
  private_key?: string;
  tags?: { [key: string]: string };
  options: AwsAcmCertificateArgsOptions;
  validation_option: AwsAcmCertificateArgsValidationOption;
}

export class aws_acm_certificate extends TerraformResource {
  readonly arn!: string;
  readonly domain_name?: string;
  readonly domain_validation_options!: any[];
  readonly id?: string;
  readonly key_algorithm?: string;
  readonly not_after!: string;
  readonly not_before!: string;
  readonly pending_renewal!: boolean;
  readonly renewal_eligibility!: string;
  readonly renewal_summary!: any[];
  readonly status!: string;
  readonly subject_alternative_names?: string[];
  readonly tags_all?: { [key: string]: string };
  readonly type!: string;
  readonly validation_emails!: string[];
  readonly validation_method?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_acm_certificate");
  }
}
