import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLightsailBucketAccessKeyArgs {
  bucket_name: string;
}
export class aws_lightsail_bucket_access_key extends TerraformResource {
  readonly access_key_id!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly secret_access_key!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailBucketAccessKeyArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_bucket_access_key");
  }
}