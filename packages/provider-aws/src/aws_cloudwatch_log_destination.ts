import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudwatchLogDestinationArgs {
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  target_arn: string;
}
export class aws_cloudwatch_log_destination extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_destination");
  }
}