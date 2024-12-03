import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNetworkInterfaceArgsAttachment {
  device_index: number;
  instance: string;
}
export interface AwsNetworkInterfaceArgs {
  description?: string;
  ipv6_address_list_enabled?: boolean;
  private_ip_list_enabled?: boolean;
  source_dest_check?: boolean;
  subnet_id: string;
  tags?: {
    [key: string]: string;
  };
  attachment: AwsNetworkInterfaceArgsAttachment;
}
export class aws_network_interface extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly interface_type?: string;
  readonly ipv4_prefix_count?: number;
  readonly ipv4_prefixes?: string[];
  readonly ipv6_address_count?: number;
  readonly ipv6_address_list?: string[];
  readonly ipv6_addresses?: string[];
  readonly ipv6_prefix_count?: number;
  readonly ipv6_prefixes?: string[];
  readonly mac_address!: string;
  readonly outpost_arn!: string;
  readonly owner_id!: string;
  readonly private_dns_name!: string;
  readonly private_ip?: string;
  readonly private_ip_list?: string[];
  readonly private_ips?: string[];
  readonly private_ips_count?: number;
  readonly security_groups?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkInterfaceArgs) {
    super(config, "resource", args, resourceName, "aws_network_interface");
  }
}