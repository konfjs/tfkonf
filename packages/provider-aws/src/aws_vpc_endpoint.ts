import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcEndpointArgsDnsOptions {
  private_dns_only_for_inbound_resolver_endpoint?: boolean;
}
export interface AwsVpcEndpointArgsSubnetConfiguration {
  ipv4?: string;
  ipv6?: string;
  subnet_id?: string;
}
export interface AwsVpcEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcEndpointArgs {
  auto_accept?: boolean;
  service_name: string;
  tags?: {
    [key: string]: string;
  };
  vpc_endpoint_type?: string;
  vpc_id: string;
  dns_options: AwsVpcEndpointArgsDnsOptions;
  subnet_configuration: AwsVpcEndpointArgsSubnetConfiguration;
  timeouts: AwsVpcEndpointArgsTimeouts;
}
export class aws_vpc_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly cidr_blocks!: string[];
  readonly dns_entry!: any[];
  readonly id?: string;
  readonly ip_address_type?: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly policy?: string;
  readonly prefix_list_id!: string;
  readonly private_dns_enabled?: boolean;
  readonly requester_managed!: boolean;
  readonly route_table_ids?: string[];
  readonly security_group_ids?: string[];
  readonly state!: string;
  readonly subnet_ids?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint");
  }
}