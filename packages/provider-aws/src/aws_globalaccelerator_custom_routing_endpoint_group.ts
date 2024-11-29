import { TerraformConfig, TerraformResource } from "tfs";
export interface DestinationConfiguration {
  from_port: number;
  protocols: string[];
  to_port: number;
}
export interface EndpointConfiguration {
  endpoint_id?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsGlobalacceleratorCustomRoutingEndpointGroupArgs {
  listener_arn: string;
  destination_configuration: DestinationConfiguration;
  endpoint_configuration: EndpointConfiguration;
  timeouts: Timeouts;
}
export class aws_globalaccelerator_custom_routing_endpoint_group extends TerraformResource {
  readonly arn!: string;
  readonly endpoint_group_region?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCustomRoutingEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_custom_routing_endpoint_group");
  }
}