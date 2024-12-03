import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCognitoUserPoolDomainArgs {
  certificate_arn?: string;
  domain: string;
  user_pool_id: string;
}
export class aws_cognito_user_pool_domain extends TerraformResource {
  readonly aws_account_id!: string;
  readonly cloudfront_distribution!: string;
  readonly cloudfront_distribution_arn!: string;
  readonly cloudfront_distribution_zone_id!: string;
  readonly id?: string;
  readonly s3_bucket!: string;
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoUserPoolDomainArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_user_pool_domain");
  }
}