import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsStoragegatewayCachedIscsiVolumeArgs {
  gateway_arn: string;
  kms_encrypted?: boolean;
  kms_key?: string;
  network_interface_id: string;
  snapshot_id?: string;
  source_volume_arn?: string;
  tags?: {
    [key: string]: string;
  };
  target_name: string;
  volume_size_in_bytes: number;
}
export class aws_storagegateway_cached_iscsi_volume extends TerraformResource {
  readonly arn!: string;
  readonly chap_enabled!: boolean;
  readonly id?: string;
  readonly lun_number!: number;
  readonly network_interface_port!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly target_arn!: string;
  readonly volume_arn!: string;
  readonly volume_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayCachedIscsiVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_cached_iscsi_volume");
  }
}