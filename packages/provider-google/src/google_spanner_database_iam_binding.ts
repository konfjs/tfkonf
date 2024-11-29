import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSpannerDatabaseIamBindingArgs {
  database: string;
  instance: string;
  members: string[];
  role: string;
  condition: Condition;
}
export class google_spanner_database_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSpannerDatabaseIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_spanner_database_iam_binding");
  }
}