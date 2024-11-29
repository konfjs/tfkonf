import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLightsailBucketArgs {
  bundle_id: string;
  force_delete?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_lightsail_bucket extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly region!: string;
  readonly support_code!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailBucketArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_bucket");
  }
}