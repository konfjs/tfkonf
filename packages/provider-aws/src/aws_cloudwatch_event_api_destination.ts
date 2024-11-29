import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchEventApiDestinationArgs {
  connection_arn: string;
  description?: string;
  http_method: string;
  invocation_endpoint: string;
  invocation_rate_limit_per_second?: number;
  name: string;
}
export class aws_cloudwatch_event_api_destination extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventApiDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_api_destination");
  }
}