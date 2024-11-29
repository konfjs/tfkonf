import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxHostedTransitVirtualInterfaceAccepterArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxHostedTransitVirtualInterfaceAccepterArgs {
  dx_gateway_id: string;
  tags?: {
    [key: string]: string;
  };
  virtual_interface_id: string;
  timeouts: AwsDxHostedTransitVirtualInterfaceAccepterArgstimeouts;
}
export class aws_dx_hosted_transit_virtual_interface_accepter extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxHostedTransitVirtualInterfaceAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_dx_hosted_transit_virtual_interface_accepter");
  }
}