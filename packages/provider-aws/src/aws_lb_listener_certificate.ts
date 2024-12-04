import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbListenerCertificateArgs {
  certificate_arn: string;
  listener_arn: string;
}

export class aws_lb_listener_certificate extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLbListenerCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_lb_listener_certificate");
  }
}
