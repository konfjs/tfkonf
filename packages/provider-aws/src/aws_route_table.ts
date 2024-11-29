import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRouteTableArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRouteTableArgs {
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
  timeouts: AwsRouteTableArgstimeouts;
}
export class aws_route_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly propagating_vgws?: string[];
  readonly route?: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRouteTableArgs) {
    super(config, "resource", args, resourceName, "aws_route_table");
  }
}