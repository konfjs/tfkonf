import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLightsailDiskArgs {
  availability_zone: string;
  name: string;
  size_in_gb: number;
  tags?: {
    [key: string]: string;
  };
}
export class aws_lightsail_disk extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly support_code!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailDiskArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_disk");
  }
}