import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMainRouteTableAssociationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMainRouteTableAssociationArgs {
  route_table_id: string;
  vpc_id: string;
  timeouts: AwsMainRouteTableAssociationArgstimeouts;
}
export class aws_main_route_table_association extends TerraformResource {
  readonly id?: string;
  readonly original_route_table_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMainRouteTableAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_main_route_table_association");
  }
}