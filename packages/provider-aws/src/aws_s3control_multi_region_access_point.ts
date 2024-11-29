import { TerraformConfig, TerraformResource } from "tfs";
export interface PublicAccessBlock {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}
export interface Region {
  bucket: string;
}
export interface Details {
  name: string;
  public_access_block: PublicAccessBlock;
  region: Region;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsS3controlMultiRegionAccessPointArgs {
  details: Details;
  timeouts: Timeouts;
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