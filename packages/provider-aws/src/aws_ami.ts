import { TerraformConfig, TerraformResource } from "tfs";
export interface EbsBlockDevice {
  delete_on_termination?: boolean;
  device_name: string;
  encrypted?: boolean;
  iops?: number;
  outpost_arn?: string;
  snapshot_id?: string;
  volume_type?: string;
}
export interface EphemeralBlockDevice {
  device_name: string;
  virtual_name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAmiArgs {
  architecture?: string;
  boot_mode?: string;
  deprecation_time?: string;
  description?: string;
  ena_support?: boolean;
  imds_support?: string;
  kernel_id?: string;
  name: string;
  ramdisk_id?: string;
  root_device_name?: string;
  sriov_net_support?: string;
  tags?: {
    [key: string]: string;
  };
  tpm_support?: string;
  virtualization_type?: string;
  ebs_block_device: EbsBlockDevice;
  ephemeral_block_device: EphemeralBlockDevice;
  timeouts: Timeouts;
}
export class aws_ami extends TerraformResource {
  readonly arn!: string;
  readonly hypervisor!: string;
  readonly id?: string;
  readonly image_location?: string;
  readonly image_owner_alias!: string;
  readonly image_type!: string;
  readonly manage_ebs_snapshots!: boolean;
  readonly owner_id!: string;
  readonly platform!: string;
  readonly platform_details!: string;
  readonly public!: boolean;
  readonly root_snapshot_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly usage_operation!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmiArgs) {
    super(config, "resource", args, resourceName, "aws_ami");
  }
}