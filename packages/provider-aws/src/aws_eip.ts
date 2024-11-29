import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEipArgstimeouts {
  delete?: string;
  read?: string;
  update?: string;
}
export interface AwsEipArgs {
  address?: string;
  associate_with_private_ip?: string;
  customer_owned_ipv4_pool?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsEipArgstimeouts;
}
export class aws_eip extends TerraformResource {
  readonly allocation_id!: string;
  readonly arn!: string;
  readonly association_id!: string;
  readonly carrier_ip!: string;
  readonly customer_owned_ip!: string;
  readonly domain?: string;
  readonly id?: string;
  readonly instance?: string;
  readonly ipam_pool_id?: string;
  readonly network_border_group?: string;
  readonly network_interface?: string;
  readonly private_dns!: string;
  readonly private_ip!: string;
  readonly ptr_record!: string;
  readonly public_dns!: string;
  readonly public_ip!: string;
  readonly public_ipv4_pool?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEipArgs) {
    super(config, "resource", args, resourceName, "aws_eip");
  }
}