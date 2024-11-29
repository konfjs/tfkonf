import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcIpamPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcIpamPoolArgs {
  address_family: string;
  allocation_default_netmask_length?: number;
  allocation_max_netmask_length?: number;
  allocation_min_netmask_length?: number;
  allocation_resource_tags?: {
    [key: string]: string;
  };
  auto_import?: boolean;
  aws_service?: string;
  cascade?: boolean;
  description?: string;
  ipam_scope_id: string;
  locale?: string;
  public_ip_source?: string;
  publicly_advertisable?: boolean;
  source_ipam_pool_id?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsVpcIpamPoolArgsTimeouts;
}
export class aws_vpc_ipam_pool extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly ipam_scope_type!: string;
  readonly pool_depth!: number;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamPoolArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_pool");
  }
}