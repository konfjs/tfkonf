import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSpannerDatabaseIamPolicyArgs {
  database: string;
  instance: string;
  policy_data: string;
}
export class google_spanner_database_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerDatabaseIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_spanner_database_iam_policy");
  }
}