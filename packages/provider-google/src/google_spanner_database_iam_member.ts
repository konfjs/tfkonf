import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerDatabaseIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSpannerDatabaseIamMemberArgs {
  database: string;
  instance: string;
  member: string;
  role: string;
  condition: GoogleSpannerDatabaseIamMemberArgscondition;
}
export class google_spanner_database_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerDatabaseIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_spanner_database_iam_member");
  }
}