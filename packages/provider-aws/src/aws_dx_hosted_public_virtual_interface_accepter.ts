import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxHostedPublicVirtualInterfaceAccepterArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxHostedPublicVirtualInterfaceAccepterArgs {
  tags?: {
    [key: string]: string;
  };
  virtual_interface_id: string;
  timeouts: AwsDxHostedPublicVirtualInterfaceAccepterArgstimeouts;
}
export class aws_dx_hosted_public_virtual_interface_accepter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxHostedPublicVirtualInterfaceAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_dx_hosted_public_virtual_interface_accepter");
  }
}