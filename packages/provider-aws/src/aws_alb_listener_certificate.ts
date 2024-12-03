import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAlbListenerCertificateArgs {
  certificate_arn: string;
  listener_arn: string;
}
export class aws_alb_listener_certificate extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAlbListenerCertificateArgs) {
    super(config, "resource", args, resourceName, "aws_alb_listener_certificate");
  }
}