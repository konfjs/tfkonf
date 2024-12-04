import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVolumeAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsVolumeAttachmentArgs {
  device_name: string;
  force_detach?: boolean;
  instance_id: string;
  skip_destroy?: boolean;
  stop_instance_before_detaching?: boolean;
  volume_id: string;
  timeouts?: AwsVolumeAttachmentArgsTimeouts;
}

export class aws_volume_attachment extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsVolumeAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_volume_attachment");
  }
}
