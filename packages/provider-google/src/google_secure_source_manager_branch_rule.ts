import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecureSourceManagerBranchRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecureSourceManagerBranchRuleArgs {
  allow_stale_reviews?: boolean;
  branch_rule_id: string;
  disabled?: boolean;
  include_pattern: string;
  location: string;
  minimum_approvals_count?: number;
  minimum_reviews_count?: number;
  repository_id: string;
  require_comments_resolved?: boolean;
  require_linear_history?: boolean;
  require_pull_request?: boolean;
  timeouts: GoogleSecureSourceManagerBranchRuleArgsTimeouts;
}
export class google_secure_source_manager_branch_rule extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecureSourceManagerBranchRuleArgs) {
    super(config, "resource", args, resourceName, "google_secure_source_manager_branch_rule");
  }
}