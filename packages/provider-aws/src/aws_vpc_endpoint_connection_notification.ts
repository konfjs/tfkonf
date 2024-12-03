import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVpcEndpointConnectionNotificationArgs {
  connection_events: string[];
  connection_notification_arn: string;
  vpc_endpoint_id?: string;
  vpc_endpoint_service_id?: string;
}
export class aws_vpc_endpoint_connection_notification extends TerraformResource {
  readonly id?: string;
  readonly notification_type!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointConnectionNotificationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_connection_notification");
  }
}