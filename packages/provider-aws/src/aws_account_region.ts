import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAccountRegionArgsTimeouts {
  create?: string;
  update?: string;
}
export interface AwsAccountRegionArgs {
  account_id?: string;
  enabled: boolean;
  region_name: string;
  timeouts?: AwsAccountRegionArgsTimeouts;
}
export class aws_account_region extends TerraformResource {
  readonly id?: string;
  readonly opt_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAccountRegionArgs) {
    super(config, "resource", args, resourceName, "aws_account_region");
  }
}