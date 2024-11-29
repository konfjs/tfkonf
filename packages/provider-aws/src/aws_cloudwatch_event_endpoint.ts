import { TerraformConfig, TerraformResource } from "tfs";
export interface EventBus {
  event_bus_arn: string;
}
export interface ReplicationConfig {
  state?: string;
}
export interface Primary {
  health_check?: string;
}
export interface Secondary {
  route?: string;
}
export interface FailoverConfig {
  primary: Primary;
  secondary: Secondary;
}
export interface RoutingConfig {
  failover_config: FailoverConfig;
}
export interface AwsCloudwatchEventEndpointArgs {
  description?: string;
  name: string;
  role_arn?: string;
  event_bus: EventBus;
  replication_config: ReplicationConfig;
  routing_config: RoutingConfig;
}
export class aws_cloudwatch_event_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly endpoint_url!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_endpoint");
  }
}