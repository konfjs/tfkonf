import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorEndpointGroupArgsEndpointConfiguration {
  attachment_arn?: string;
  endpoint_id?: string;
  weight?: number;
}

export interface AwsGlobalacceleratorEndpointGroupArgsPortOverride {
  endpoint_port: number;
  listener_port: number;
}

export interface AwsGlobalacceleratorEndpointGroupArgsTimeouts {
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
  endpoint_configuration: AwsGlobalacceleratorEndpointGroupArgsEndpointConfiguration;
  port_override: AwsGlobalacceleratorEndpointGroupArgsPortOverride;
  timeouts?: AwsGlobalacceleratorEndpointGroupArgsTimeouts;
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
