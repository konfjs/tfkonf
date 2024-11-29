import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudfrontOriginAccessIdentityArgs {
  comment?: string;
}
export class aws_cloudfront_origin_access_identity extends TerraformResource {
  readonly caller_reference!: string;
  readonly cloudfront_access_identity_path!: string;
  readonly etag!: string;
  readonly iam_arn!: string;
  readonly id?: string;
  readonly s3_canonical_user_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontOriginAccessIdentityArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_origin_access_identity");
  }
}