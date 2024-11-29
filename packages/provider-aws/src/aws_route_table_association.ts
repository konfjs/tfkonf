import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRouteTableAssociationArgs {
  gateway_id?: string;
  route_table_id: string;
  subnet_id?: string;
  timeouts: Timeouts;
}
export class aws_route_table_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRouteTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_route_table_association");
  }
}