import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3BucketRequestPaymentConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  payer: string;
}

export class aws_s3_bucket_request_payment_configuration extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketRequestPaymentConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_request_payment_configuration");
  }
}
