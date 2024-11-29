import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxHostedPrivateVirtualInterfaceAccepterArgs {
  dx_gateway_id?: string;
  tags?: {
    [key: string]: string;
  };
  virtual_interface_id: string;
  vpn_gateway_id?: string;
  timeouts: Timeouts;
}
export class aws_dx_hosted_private_virtual_interface_accepter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxHostedPrivateVirtualInterfaceAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_dx_hosted_private_virtual_interface_accepter");
  }
}