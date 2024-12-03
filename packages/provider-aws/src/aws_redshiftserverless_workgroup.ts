import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftserverlessWorkgroupArgsConfigParameter {
  parameter_key: string;
  parameter_value: string;
}
export interface AwsRedshiftserverlessWorkgroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRedshiftserverlessWorkgroupArgs {
  enhanced_vpc_routing?: boolean;
  max_capacity?: number;
  namespace_name: string;
  publicly_accessible?: boolean;
  tags?: {
    [key: string]: string;
  };
  workgroup_name: string;
  config_parameter: AwsRedshiftserverlessWorkgroupArgsConfigParameter;
  timeouts?: AwsRedshiftserverlessWorkgroupArgsTimeouts;
}
export class aws_redshiftserverless_workgroup extends TerraformResource {
  readonly arn!: string;
  readonly base_capacity?: number;
  readonly endpoint!: any[];
  readonly id?: string;
  readonly port?: number;
  readonly security_group_ids?: string[];
  readonly subnet_ids?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly workgroup_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessWorkgroupArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_workgroup");
  }
}