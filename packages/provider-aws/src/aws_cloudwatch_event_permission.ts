import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchEventPermissionArgsCondition {
  key: string;
  type: string;
  value: string;
}
export interface AwsCloudwatchEventPermissionArgs {
  action?: string;
  event_bus_name?: string;
  principal: string;
  statement_id: string;
  condition: AwsCloudwatchEventPermissionArgsCondition;
}
export class aws_cloudwatch_event_permission extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventPermissionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_permission");
  }
}