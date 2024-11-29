import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsGlobalacceleratorAcceleratorArgsAttributes {
  flow_logs_enabled?: boolean;
  flow_logs_s3_bucket?: string;
  flow_logs_s3_prefix?: string;
}
export interface AwsGlobalacceleratorAcceleratorArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsGlobalacceleratorAcceleratorArgs {
  enabled?: boolean;
  ip_address_type?: string;
  ip_addresses?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  attributes: AwsGlobalacceleratorAcceleratorArgsAttributes;
  timeouts: AwsGlobalacceleratorAcceleratorArgsTimeouts;
}
export class aws_globalaccelerator_accelerator extends TerraformResource {
  readonly dns_name!: string;
  readonly dual_stack_dns_name!: string;
  readonly hosted_zone_id!: string;
  readonly id?: string;
  readonly ip_sets!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlobalacceleratorAcceleratorArgs) {
    super(config, "resource", args, resourceName, "aws_globalaccelerator_accelerator");
  }
}