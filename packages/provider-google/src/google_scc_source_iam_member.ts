import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccSourceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleSccSourceIamMemberArgs {
  member: string;
  organization: string;
  role: string;
  source: string;
  condition: GoogleSccSourceIamMemberArgsCondition;
}

export class google_scc_source_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccSourceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_scc_source_iam_member");
  }
}
