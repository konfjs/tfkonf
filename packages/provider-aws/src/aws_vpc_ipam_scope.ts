import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpcIpamScopeArgs {
  description?: string;
  ipam_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_vpc_ipam_scope extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly ipam_arn!: string;
  readonly ipam_scope_type!: string;
  readonly is_default!: boolean;
  readonly pool_count!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcIpamScopeArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_ipam_scope");
  }
}