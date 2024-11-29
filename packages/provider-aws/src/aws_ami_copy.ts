import { TerraformConfig, TerraformResource } from "tfs";
export interface EbsBlockDevice {}
export interface EphemeralBlockDevice {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAmiCopyArgs {
  deprecation_time?: string;
  description?: string;
  destination_outpost_arn?: string;
  encrypted?: boolean;
  name: string;
  source_ami_id: string;
  source_ami_region: string;
  tags?: {
    [key: string]: string;
  };
  ebs_block_device: EbsBlockDevice;
  ephemeral_block_device: EphemeralBlockDevice;
  timeouts: Timeouts;
}
export class aws_ami_copy extends TerraformResource {
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
  readonly kms_key_id?: string;
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
  constructor(config: TerraformConfig, resourceName: string, args: AwsAmiCopyArgs) {
    super(config, "resource", args, resourceName, "aws_ami_copy");
  }
}