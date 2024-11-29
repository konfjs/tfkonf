import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEipAssociationArgs {
  allow_reassociation?: boolean;
}
export class aws_eip_association extends TerraformResource {
  readonly allocation_id?: string;
  readonly id?: string;
  readonly instance_id?: string;
  readonly network_interface_id?: string;
  readonly private_ip_address?: string;
  readonly public_ip?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEipAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_eip_association");
  }
}