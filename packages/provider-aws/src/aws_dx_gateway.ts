import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxGatewayArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDxGatewayArgs {
  amazon_side_asn: string;
  name: string;
  timeouts: AwsDxGatewayArgstimeouts;
}
export class aws_dx_gateway extends TerraformResource {
  readonly id?: string;
  readonly owner_account_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_dx_gateway");
  }
}