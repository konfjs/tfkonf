import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsStoragegatewayNfsFileShareArgsCacheAttributes {
  cache_stale_timeout_in_seconds?: number;
}
export interface AwsStoragegatewayNfsFileShareArgsNfsFileShareDefaults {
  directory_mode?: string;
  file_mode?: string;
  group_id?: string;
  owner_id?: string;
}
export interface AwsStoragegatewayNfsFileShareArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsStoragegatewayNfsFileShareArgs {
  audit_destination_arn?: string;
  bucket_region?: string;
  client_list: string[];
  default_storage_class?: string;
  gateway_arn: string;
  guess_mime_type_enabled?: boolean;
  kms_encrypted?: boolean;
  kms_key_arn?: string;
  location_arn: string;
  notification_policy?: string;
  object_acl?: string;
  read_only?: boolean;
  requester_pays?: boolean;
  role_arn: string;
  squash?: string;
  tags?: {
    [key: string]: string;
  };
  vpc_endpoint_dns_name?: string;
  cache_attributes: AwsStoragegatewayNfsFileShareArgsCacheAttributes;
  nfs_file_share_defaults: AwsStoragegatewayNfsFileShareArgsNfsFileShareDefaults;
  timeouts: AwsStoragegatewayNfsFileShareArgsTimeouts;
}
export class aws_storagegateway_nfs_file_share extends TerraformResource {
  readonly arn!: string;
  readonly file_share_name?: string;
  readonly fileshare_id!: string;
  readonly id?: string;
  readonly path!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayNfsFileShareArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_nfs_file_share");
  }
}