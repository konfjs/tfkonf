import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpsworksStackArgsCustomCookbooksSource {
  password?: string;
  revision?: string;
  ssh_key?: string;
  type: string;
  url: string;
  username?: string;
}
export interface AwsOpsworksStackArgsTimeouts {
  create?: string;
}
export interface AwsOpsworksStackArgs {
  berkshelf_version?: string;
  color?: string;
  configuration_manager_name?: string;
  configuration_manager_version?: string;
  custom_json?: string;
  default_instance_profile_arn: string;
  default_os?: string;
  default_root_device_type?: string;
  default_ssh_key_name?: string;
  hostname_theme?: string;
  manage_berkshelf?: boolean;
  name: string;
  region: string;
  service_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  use_custom_cookbooks?: boolean;
  use_opsworks_security_groups?: boolean;
  custom_cookbooks_source: AwsOpsworksStackArgsCustomCookbooksSource;
  timeouts?: AwsOpsworksStackArgsTimeouts;
}
export class aws_opsworks_stack extends TerraformResource {
  readonly agent_version?: string;
  readonly arn!: string;
  readonly default_availability_zone?: string;
  readonly default_subnet_id?: string;
  readonly id?: string;
  readonly stack_endpoint!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksStackArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_stack");
  }
}