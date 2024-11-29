import { TerraformConfig, TerraformResource } from "tfs";
export interface CorsRule {
  allowed_headers?: string[];
  allowed_methods: string[];
  allowed_origins: string[];
  expose_headers?: string[];
  id?: string;
  max_age_seconds?: number;
}
export interface AwsS3BucketCorsConfigurationArgs {
  bucket: string;
  expected_bucket_owner?: string;
  cors_rule: CorsRule;
}
export class aws_s3_bucket_cors_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketCorsConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_cors_configuration");
  }
}