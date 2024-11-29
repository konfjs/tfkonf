import { TerraformConfig, TerraformResource } from "tfs";
export interface Filter {
  prefix?: string;
  tags?: {
    [key: string]: string;
  };
}
export interface Tiering {
  access_tier: string;
  days: number;
}
export interface AwsS3BucketIntelligentTieringConfigurationArgs {
  bucket: string;
  name: string;
  status?: string;
  filter: Filter;
  tiering: Tiering;
}
export class aws_s3_bucket_intelligent_tiering_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3BucketIntelligentTieringConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_s3_bucket_intelligent_tiering_configuration");
  }
}