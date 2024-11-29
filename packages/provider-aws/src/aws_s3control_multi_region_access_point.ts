import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3controlMultiRegionAccessPointArgsdetailsPublicAccessBlock {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}
export interface AwsS3controlMultiRegionAccessPointArgsdetailsregion {
  bucket: string;
}
export interface AwsS3controlMultiRegionAccessPointArgsdetails {
  name: string;
  public_access_block: AwsS3controlMultiRegionAccessPointArgsdetailsPublicAccessBlock;
  region: AwsS3controlMultiRegionAccessPointArgsdetailsregion;
}
export interface AwsS3controlMultiRegionAccessPointArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsS3controlMultiRegionAccessPointArgs {
  details: AwsS3controlMultiRegionAccessPointArgsdetails;
  timeouts: AwsS3controlMultiRegionAccessPointArgstimeouts;
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