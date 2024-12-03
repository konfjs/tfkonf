import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3controlMultiRegionAccessPointArgsDetailsPublicAccessBlock {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}
export interface AwsS3controlMultiRegionAccessPointArgsDetailsRegion {
  bucket: string;
}
export interface AwsS3controlMultiRegionAccessPointArgsDetails {
  name: string;
  public_access_block: AwsS3controlMultiRegionAccessPointArgsDetailsPublicAccessBlock;
  region: AwsS3controlMultiRegionAccessPointArgsDetailsRegion;
}
export interface AwsS3controlMultiRegionAccessPointArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsS3controlMultiRegionAccessPointArgs {
  details: AwsS3controlMultiRegionAccessPointArgsDetails;
  timeouts?: AwsS3controlMultiRegionAccessPointArgsTimeouts;
}
export class aws_s3control_multi_region_access_point extends TerraformResource {
  readonly account_id?: string;
  readonly alias!: string;
  readonly arn!: string;
  readonly domain_name!: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlMultiRegionAccessPointArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_multi_region_access_point");
  }
}