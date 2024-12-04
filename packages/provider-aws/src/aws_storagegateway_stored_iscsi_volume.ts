import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayStoredIscsiVolumeArgs {
  disk_id: string;
  gateway_arn: string;
  kms_encrypted?: boolean;
  kms_key?: string;
  network_interface_id: string;
  preserve_existing_data: boolean;
  snapshot_id?: string;
  tags?: { [key: string]: string };
  target_name: string;
}

export class aws_storagegateway_stored_iscsi_volume extends TerraformResource {
  readonly arn!: string;
  readonly chap_enabled!: boolean;
  readonly id?: string;
  readonly lun_number!: number;
  readonly network_interface_port!: number;
  readonly tags_all?: { [key: string]: string };
  readonly target_arn!: string;
  readonly volume_attachment_status!: string;
  readonly volume_id!: string;
  readonly volume_size_in_bytes!: number;
  readonly volume_status!: string;
  readonly volume_type!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayStoredIscsiVolumeArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_stored_iscsi_volume");
  }
}
