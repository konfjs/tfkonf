import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDxGatewayAssociationArgs {
  dx_gateway_id: string;
  proposal_id?: string;
  vpn_gateway_id?: string;
  timeouts: Timeouts;
}
export class aws_dx_gateway_association extends TerraformResource {
  readonly allowed_prefixes?: string[];
  readonly associated_gateway_id?: string;
  readonly associated_gateway_owner_account_id?: string;
  readonly associated_gateway_type!: string;
  readonly dx_gateway_association_id!: string;
  readonly dx_gateway_owner_account_id!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxGatewayAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_dx_gateway_association");
  }
}