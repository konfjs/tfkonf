import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomDnsConfiguration {
  custom_dns_server_ip: string;
  custom_dns_server_name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface IcmpTypeCode {
  code: number;
  type: number;
}
export interface PortRange {
  from: number;
  to: number;
}
export interface AttachmentNetworkAclConfiguration {
  cidr_block: string;
  protocol: string;
  rule_action: string;
  rule_number: number;
  icmp_type_code: IcmpTypeCode;
  port_range: PortRange;
}
export interface TransitGatewayConfiguration {
  routable_cidr_space: string;
  transit_gateway_id: string;
  attachment_network_acl_configuration: AttachmentNetworkAclConfiguration;
}
export interface AwsFinspaceKxEnvironmentArgs {
  description?: string;
  kms_key_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  custom_dns_configuration: CustomDnsConfiguration;
  timeouts: Timeouts;
  transit_gateway_configuration: TransitGatewayConfiguration;
}
export class aws_finspace_kx_environment extends TerraformResource {
  readonly arn!: string;
  readonly availability_zones!: string[];
  readonly created_timestamp!: string;
  readonly id!: string;
  readonly infrastructure_account_id!: string;
  readonly last_modified_timestamp!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFinspaceKxEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_finspace_kx_environment");
  }
}