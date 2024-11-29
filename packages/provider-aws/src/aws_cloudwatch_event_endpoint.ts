import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudwatchEventEndpointArgsEventBus {
  event_bus_arn: string;
}
export interface AwsCloudwatchEventEndpointArgsReplicationConfig {
  state?: string;
}
export interface AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigprimary {
  health_check?: string;
}
export interface AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigsecondary {
  route?: string;
}
export interface AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfig {
  primary: AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigprimary;
  secondary: AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfigsecondary;
}
export interface AwsCloudwatchEventEndpointArgsRoutingConfig {
  failover_config: AwsCloudwatchEventEndpointArgsRoutingConfigFailoverConfig;
}
export interface AwsCloudwatchEventEndpointArgs {
  description?: string;
  name: string;
  role_arn?: string;
  event_bus: AwsCloudwatchEventEndpointArgsEventBus;
  replication_config: AwsCloudwatchEventEndpointArgsReplicationConfig;
  routing_config: AwsCloudwatchEventEndpointArgsRoutingConfig;
}
export class aws_cloudwatch_event_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly endpoint_url!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_endpoint");
  }
}