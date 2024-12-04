import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFmsAdminAccountArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsFmsAdminAccountArgs {
  timeouts?: AwsFmsAdminAccountArgsTimeouts;
}

export class aws_fms_admin_account extends TerraformResource {
  readonly account_id?: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsFmsAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_fms_admin_account");
  }
}
