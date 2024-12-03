import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDxGatewayAssociationProposalArgs {
  associated_gateway_id: string;
  dx_gateway_id: string;
  dx_gateway_owner_account_id: string;
}
export class aws_dx_gateway_association_proposal extends TerraformResource {
  readonly allowed_prefixes?: string[];
  readonly associated_gateway_owner_account_id!: string;
  readonly associated_gateway_type!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxGatewayAssociationProposalArgs) {
    super(config, "resource", args, resourceName, "aws_dx_gateway_association_proposal");
  }
}