import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFinspaceKxEnvironmentArgsCustomDnsConfiguration {
  custom_dns_server_ip: string;
  custom_dns_server_name: string;
}

export interface AwsFinspaceKxEnvironmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode {
  code: number;
  type: number;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange {
  from: number;
  to: number;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfiguration {
  cidr_block: string;
  protocol: string;
  rule_action: string;
  rule_number: number;
  icmp_type_code: AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode;
  port_range: AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange;
}

export interface AwsFinspaceKxEnvironmentArgsTransitGatewayConfiguration {
  routable_cidr_space: string;
  transit_gateway_id: string;
  attachment_network_acl_configuration: AwsFinspaceKxEnvironmentArgsTransitGatewayConfigurationAttachmentNetworkAclConfiguration;
}

export interface AwsFinspaceKxEnvironmentArgs {
  description?: string;
  kms_key_id: string;
  name: string;
  tags?: { [key: string]: string };
  custom_dns_configuration: AwsFinspaceKxEnvironmentArgsCustomDnsConfiguration;
  timeouts?: AwsFinspaceKxEnvironmentArgsTimeouts;
  transit_gateway_configuration: AwsFinspaceKxEnvironmentArgsTransitGatewayConfiguration;
}

export class aws_finspace_kx_environment extends TerraformResource {
  readonly arn!: string;
  readonly availability_zones!: string[];
  readonly created_timestamp!: string;
  readonly id!: string;
  readonly infrastructure_account_id!: string;
  readonly last_modified_timestamp!: string;
  readonly status!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_environment");
  }
}
