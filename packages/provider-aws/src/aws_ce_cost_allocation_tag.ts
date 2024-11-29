import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCeCostAllocationTagArgs {
  status: string;
  tag_key: string;
}
export class aws_ce_cost_allocation_tag extends TerraformResource {
  readonly id?: string;
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCeCostAllocationTagArgs) {
    super(config, "resource", args, resourceName, "aws_ce_cost_allocation_tag");
  }
}