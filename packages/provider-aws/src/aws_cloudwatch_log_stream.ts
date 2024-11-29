import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudwatchLogStreamArgs {
  log_group_name: string;
  name: string;
}
export class aws_cloudwatch_log_stream extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchLogStreamArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_log_stream");
  }
}