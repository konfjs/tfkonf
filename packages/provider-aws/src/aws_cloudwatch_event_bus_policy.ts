import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchEventBusPolicyArgs {
  event_bus_name?: string;
  policy: string;
}
export class aws_cloudwatch_event_bus_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventBusPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_bus_policy");
  }
}