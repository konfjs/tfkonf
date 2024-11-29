import { TerraformConfig, TerraformResource } from "tfs";
export interface EbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  no_device?: boolean;
}
export interface EphemeralBlockDevice {
  device_name: string;
  no_device?: boolean;
  virtual_name?: string;
}
export interface MetadataOptions {}
export interface RootBlockDevice {
  delete_on_termination?: boolean;
}
export interface AwsLaunchConfigurationArgs {
  enable_monitoring?: boolean;
  iam_instance_profile?: string;
  image_id: string;
  instance_type: string;
  placement_tenancy?: string;
  security_groups?: string[];
  spot_price?: string;
  user_data?: string;
  user_data_base64?: string;
  ebs_block_device: EbsBlockDevice;
  ephemeral_block_device: EphemeralBlockDevice;
  metadata_options: MetadataOptions;
  root_block_device: RootBlockDevice;
}
export class aws_launch_configuration extends TerraformResource {
  readonly arn!: string;
  readonly associate_public_ip_address?: boolean;
  readonly ebs_optimized?: boolean;
  readonly id?: string;
  readonly key_name?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLaunchConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_launch_configuration");
  }
}