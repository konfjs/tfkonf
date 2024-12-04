import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspector2MemberAssociationArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsInspector2MemberAssociationArgs {
  account_id: string;
  timeouts?: AwsInspector2MemberAssociationArgsTimeouts;
}

export class aws_inspector2_member_association extends TerraformResource {
  readonly delegated_admin_account_id!: string;
  readonly id?: string;
  readonly relationship_status!: string;
  readonly updated_at!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsInspector2MemberAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_inspector2_member_association");
  }
}
