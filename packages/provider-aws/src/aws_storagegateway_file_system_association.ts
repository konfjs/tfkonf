import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsStoragegatewayFileSystemAssociationArgsCacheAttributes {
  cache_stale_timeout_in_seconds?: number;
}
export interface AwsStoragegatewayFileSystemAssociationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsStoragegatewayFileSystemAssociationArgs {
  audit_destination_arn?: string;
  gateway_arn: string;
  location_arn: string;
  password: string;
  tags?: {
    [key: string]: string;
  };
  username: string;
  cache_attributes: AwsStoragegatewayFileSystemAssociationArgsCacheAttributes;
  timeouts?: AwsStoragegatewayFileSystemAssociationArgsTimeouts;
}
export class aws_storagegateway_file_system_association extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayFileSystemAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_file_system_association");
  }
}