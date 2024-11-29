import { TerraformConfig, TerraformResource } from "tfs";
export interface EndpointConfiguration {
  attachment_arn?: string;
  endpoint_id?: string;
  weight?: number;
}
export interface PortOverride {
  endpoint_port: number;
  listener_port: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsGlobalacceleratorEndpointGroupArgs {
  health_check_interval_seconds?: number;
  health_check_protocol?: string;
  listener_arn: string;
  threshold_count?: number;
  traffic_dial_percentage?: number;
  endpoint_configuration: EndpointConfiguration;
  port_override: PortOverride;
  timeouts: Timeouts;
}
export class aws_globalaccelerator_endpoint_group extends TerraformResource {
  readonly arn!: string;
  readonly endpoint_group_region?: string;
  readonly health_check_path?: string;
  readonly health_check_port?: number;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorEndpointGroupArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_endpoint_group");
  }
}