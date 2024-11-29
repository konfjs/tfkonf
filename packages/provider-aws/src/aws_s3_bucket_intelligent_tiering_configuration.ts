import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3BucketIntelligentTieringConfigurationArgsFilter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsS3BucketIntelligentTieringConfigurationArgsTiering {
  access_tier: string;
  days: number;
}
export interface AwsS3BucketIntelligentTieringConfigurationArgs {
  bucket: string;
  name: string;
  status?: string;
  filter: AwsS3BucketIntelligentTieringConfigurationArgsFilter;
  tiering: AwsS3BucketIntelligentTieringConfigurationArgsTiering;
}
export class aws_s3_bucket_intelligent_tiering_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketIntelligentTieringConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_intelligent_tiering_configuration");
  }
}