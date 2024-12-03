import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloud9EnvironmentEc2Args {
  automatic_stop_time_minutes?: number;
  connection_type?: string;
  description?: string;
  image_id: string;
  instance_type: string;
  name: string;
  subnet_id?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_cloud9_environment_ec2 extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_arn?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloud9EnvironmentEc2Args) {
    super(config, "resource", args, resourceName, "aws_cloud9_environment_ec2");
  }
}