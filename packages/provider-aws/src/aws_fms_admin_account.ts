import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsFmsAdminAccountArgs {
  timeouts: Timeouts;
}
export class aws_fms_admin_account extends TerraformResource {
  readonly account_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFmsAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_fms_admin_account");
  }
}