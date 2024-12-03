import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDirectoryServiceLogSubscriptionArgs {
  directory_id: string;
  log_group_name: string;
}
export class aws_directory_service_log_subscription extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDirectoryServiceLogSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_directory_service_log_subscription");
  }
}