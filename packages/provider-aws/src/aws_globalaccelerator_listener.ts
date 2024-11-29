import { TerraformConfig, TerraformResource } from "tfs";
export interface PortRange {
  from_port?: number;
  to_port?: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsGlobalacceleratorListenerArgs {
  accelerator_arn: string;
  client_affinity?: string;
  protocol: string;
  port_range: PortRange;
  timeouts: Timeouts;
}
export class aws_globalaccelerator_listener extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorListenerArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_listener");
  }
}