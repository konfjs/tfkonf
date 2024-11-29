import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAcmCertificateValidationArgsTimeouts {
  create?: string;
}
export interface AwsAcmCertificateValidationArgs {
  certificate_arn: string;
  validation_record_fqdns?: string[];
  timeouts: AwsAcmCertificateValidationArgsTimeouts;
}
export class aws_acm_certificate_validation extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmCertificateValidationArgs) {
    super(config, "resource", args, resourceName, "aws_acm_certificate_validation");
  }
}