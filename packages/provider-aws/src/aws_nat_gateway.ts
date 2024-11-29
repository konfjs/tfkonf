import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsNatGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNatGatewayArgs {
  allocation_id?: string;
  connectivity_type?: string;
  secondary_allocation_ids?: string[];
  subnet_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsNatGatewayArgsTimeouts;
}
export class aws_nat_gateway extends TerraformResource {
  readonly association_id!: string;
  readonly id?: string;
  readonly network_interface_id!: string;
  readonly private_ip?: string;
  readonly public_ip!: string;
  readonly secondary_private_ip_address_count?: number;
  readonly secondary_private_ip_addresses?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNatGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_nat_gateway");
  }
}