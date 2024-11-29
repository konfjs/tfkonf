import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLightsailLbCertificateArgs {
  lb_name: string;
  name: string;
}
export class aws_lightsail_lb_certificate extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly domain_name?: string;
  readonly domain_validation_records!: any[];
  readonly id?: string;
  readonly subject_alternative_names?: string[];
  readonly support_code!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailLbCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_lb_certificate");
  }
}