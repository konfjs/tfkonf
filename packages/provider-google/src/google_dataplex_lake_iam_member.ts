import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexLakeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexLakeIamMemberArgs {
  lake: string;
  member: string;
  role: string;
  condition: GoogleDataplexLakeIamMemberArgsCondition;
}
export class google_dataplex_lake_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexLakeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_lake_iam_member");
  }
}