import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsInspector2DelegatedAdminAccountArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsInspector2DelegatedAdminAccountArgs {
  account_id: string;
  timeouts: AwsInspector2DelegatedAdminAccountArgstimeouts;
}
export class aws_inspector2_delegated_admin_account extends TerraformResource {
  readonly id?: string;
  readonly relationship_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInspector2DelegatedAdminAccountArgs) {
    super(config, "resource", args, resourceName, "aws_inspector2_delegated_admin_account");
  }
}