import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgsDestinationConfiguration {
  from_port: number;
  protocols: string[];
  to_port: number;
}
export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgsEndpointConfiguration {
  endpoint_id?: string;
}
export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgs {
  listener_arn: string;
  destination_configuration: AwsGlobalacceleratorCustomRoutingEndpointGroupArgsDestinationConfiguration;
  endpoint_configuration: AwsGlobalacceleratorCustomRoutingEndpointGroupArgsEndpointConfiguration;
  timeouts: AwsGlobalacceleratorCustomRoutingEndpointGroupArgsTimeouts;
}
export class aws_globalaccelerator_custom_routing_endpoint_group extends TerraformResource {
  readonly arn!: string;
  readonly endpoint_group_region?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCustomRoutingEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_custom_routing_endpoint_group");
  }
}