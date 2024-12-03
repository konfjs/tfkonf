import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAmiFromInstanceArgsEbsBlockDevice {}
export interface AwsAmiFromInstanceArgsEphemeralBlockDevice {}
export interface AwsAmiFromInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAmiFromInstanceArgs {
  deprecation_time?: string;
  description?: string;
  name: string;
  snapshot_without_reboot?: boolean;
  source_instance_id: string;
  tags?: {
    [key: string]: string;
  };
  ebs_block_device: AwsAmiFromInstanceArgsEbsBlockDevice;
  ephemeral_block_device: AwsAmiFromInstanceArgsEphemeralBlockDevice;
  timeouts?: AwsAmiFromInstanceArgsTimeouts;
}
export class aws_ami_from_instance extends TerraformResource {
  readonly architecture!: string;
  readonly arn!: string;
  readonly boot_mode!: string;
  readonly ena_support!: boolean;
  readonly hypervisor!: string;
  readonly id?: string;
  readonly image_location!: string;
  readonly image_owner_alias!: string;
  readonly image_type!: string;
  readonly imds_support!: string;
  readonly kernel_id!: string;
  readonly manage_ebs_snapshots!: boolean;
  readonly owner_id!: string;
  readonly platform!: string;
  readonly platform_details!: string;
  readonly public!: boolean;
  readonly ramdisk_id!: string;
  readonly root_device_name!: string;
  readonly root_snapshot_id!: string;
  readonly sriov_net_support!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly tpm_support!: string;
  readonly usage_operation!: string;
  readonly virtualization_type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmiFromInstanceArgs) {
    super(config, "resource", args, resourceName, "aws_ami_from_instance");
  }
}