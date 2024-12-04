import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlobalacceleratorCustomRoutingAcceleratorArgsAttributes {
  flow_logs_enabled?: boolean;
  flow_logs_s3_bucket?: string;
  flow_logs_s3_prefix?: string;
}

export interface AwsGlobalacceleratorCustomRoutingAcceleratorArgsTimeouts {
  create?: string;
  update?: string;
}

export interface AwsGlobalacceleratorCustomRoutingAcceleratorArgs {
  enabled?: boolean;
  ip_address_type?: string;
  ip_addresses?: string[];
  name: string;
  tags?: { [key: string]: string };
  attributes: AwsGlobalacceleratorCustomRoutingAcceleratorArgsAttributes;
  timeouts?: AwsGlobalacceleratorCustomRoutingAcceleratorArgsTimeouts;
}

export class aws_globalaccelerator_custom_routing_accelerator extends TerraformResource {
  readonly dns_name!: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly ip_sets!: any[];
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorCustomRoutingAcceleratorArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_custom_routing_accelerator");
  }
}
