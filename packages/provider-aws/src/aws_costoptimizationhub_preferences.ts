import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCostoptimizationhubPreferencesArgs {
}

export class aws_costoptimizationhub_preferences extends TerraformResource {
  readonly id!: string;
  readonly member_account_discount_visibility?: string;
  readonly savings_estimation_mode?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCostoptimizationhubPreferencesArgs) {
    super(config, "resource", args, resourceName, "aws_costoptimizationhub_preferences");
  }
}
