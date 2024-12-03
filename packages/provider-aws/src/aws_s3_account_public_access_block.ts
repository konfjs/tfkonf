import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3AccountPublicAccessBlockArgs {
  block_public_acls?: boolean;
  block_public_policy?: boolean;
  ignore_public_acls?: boolean;
  restrict_public_buckets?: boolean;
}
export class aws_s3_account_public_access_block extends TerraformResource {
  readonly account_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3AccountPublicAccessBlockArgs) {
    super(config, "resource", args, resourceName, "aws_s3_account_public_access_block");
  }
}