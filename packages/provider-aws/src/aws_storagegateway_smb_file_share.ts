import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsStoragegatewaySmbFileShareArgsCacheAttributes {
  cache_stale_timeout_in_seconds?: number;
}
export interface AwsStoragegatewaySmbFileShareArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsStoragegatewaySmbFileShareArgs {
  access_based_enumeration?: boolean;
  admin_user_list?: string[];
  audit_destination_arn?: string;
  authentication?: string;
  bucket_region?: string;
  case_sensitivity?: string;
  default_storage_class?: string;
  gateway_arn: string;
  guess_mime_type_enabled?: boolean;
  invalid_user_list?: string[];
  kms_encrypted?: boolean;
  kms_key_arn?: string;
  location_arn: string;
  notification_policy?: string;
  object_acl?: string;
  read_only?: boolean;
  requester_pays?: boolean;
  role_arn: string;
  smb_acl_enabled?: boolean;
  tags?: {
    [key: string]: string;
  };
  valid_user_list?: string[];
  vpc_endpoint_dns_name?: string;
  cache_attributes: AwsStoragegatewaySmbFileShareArgsCacheAttributes;
  timeouts: AwsStoragegatewaySmbFileShareArgsTimeouts;
}
export class aws_storagegateway_smb_file_share extends TerraformResource {
  readonly arn!: string;
  readonly file_share_name?: string;
  readonly fileshare_id!: string;
  readonly id?: string;
  readonly oplocks_enabled?: boolean;
  readonly path!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewaySmbFileShareArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_smb_file_share");
  }
}