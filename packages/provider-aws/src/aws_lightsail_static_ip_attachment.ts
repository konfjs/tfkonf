import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLightsailStaticIpAttachmentArgs {
  instance_name: string;
  static_ip_name: string;
}
export class aws_lightsail_static_ip_attachment extends TerraformResource {
  readonly id?: string;
  readonly ip_address!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailStaticIpAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_static_ip_attachment");
  }
}