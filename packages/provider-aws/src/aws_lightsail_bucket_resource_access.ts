import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLightsailBucketResourceAccessArgs {
  bucket_name: string;
  resource_name: string;
}
export class aws_lightsail_bucket_resource_access extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailBucketResourceAccessArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_bucket_resource_access");
  }
}