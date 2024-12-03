import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLightsailLbCertificateAttachmentArgs {
  certificate_name: string;
  lb_name: string;
}
export class aws_lightsail_lb_certificate_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailLbCertificateAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_lb_certificate_attachment");
  }
}