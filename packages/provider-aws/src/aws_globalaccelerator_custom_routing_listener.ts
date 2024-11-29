import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGlobalacceleratorCustomRoutingListenerArgsPortRange {
  from_port?: number;
  to_port?: number;
}
export interface AwsGlobalacceleratorCustomRoutingListenerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsGlobalacceleratorCustomRoutingListenerArgs {
  accelerator_arn: string;
  port_range: AwsGlobalacceleratorCustomRoutingListenerArgsPortRange;
  timeouts: AwsGlobalacceleratorCustomRoutingListenerArgsTimeouts;
}
export class aws_globalaccelerator_custom_routing_listener extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCustomRoutingListenerArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_custom_routing_listener");
  }
}