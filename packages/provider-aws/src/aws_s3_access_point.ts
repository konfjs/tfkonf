import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3AccessPointArgsPublicAccessBlockConfiguration {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}
export interface AwsS3AccessPointArgsVpcConfiguration {
  vpc_id: string;
}
export interface AwsS3AccessPointArgs {
  bucket: string;
  name: string;
  public_access_block_configuration: AwsS3AccessPointArgsPublicAccessBlockConfiguration;
  vpc_configuration: AwsS3AccessPointArgsVpcConfiguration;
}
export class aws_s3_access_point extends TerraformResource {
  readonly account_id?: string;
  readonly alias!: string;
  readonly arn!: string;
  readonly bucket_account_id?: string;
  readonly domain_name!: string;
  readonly endpoints!: {
    [key: string]: string;
  };
  readonly has_public_access_policy!: boolean;
  readonly id?: string;
  readonly network_origin!: string;
  readonly policy?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3AccessPointArgs) {
    super(config, "resource", args, resourceName, "aws_s3_access_point");
  }
}