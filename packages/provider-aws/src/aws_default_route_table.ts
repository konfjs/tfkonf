import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface AwsDefaultRouteTableArgs {
  default_route_table_id: string;
  propagating_vgws?: string[];
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_default_route_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly route?: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDefaultRouteTableArgs) {
    super(config, "resource", args, resourceName, "aws_default_route_table");
  }
}