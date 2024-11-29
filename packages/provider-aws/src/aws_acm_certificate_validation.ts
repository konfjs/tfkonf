import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAcmCertificateValidationArgstimeouts {
  create?: string;
}
export interface AwsAcmCertificateValidationArgs {
  certificate_arn: string;
  validation_record_fqdns?: string[];
  timeouts: AwsAcmCertificateValidationArgstimeouts;
}
export class aws_acm_certificate_validation extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAcmCertificateValidationArgs) {
    super(config, "resource", args, resourceName, "aws_acm_certificate_validation");
  }
}