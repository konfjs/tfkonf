import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailDiskAttachmentArgs {
  disk_name: string;
  disk_path: string;
  instance_name: string;
}

export class aws_lightsail_disk_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailDiskAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_disk_attachment");
  }
}
