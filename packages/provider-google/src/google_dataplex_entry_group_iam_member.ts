import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexEntryGroupIamMemberArgs {
  entry_group_id: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_dataplex_entry_group_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_group_iam_member");
  }
}