import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigtableTableIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigtableTableIamMemberArgs {
  instance: string;
  member: string;
  role: string;
  table: string;
  condition: GoogleBigtableTableIamMemberArgsCondition;
}
export class google_bigtable_table_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_table_iam_member");
  }
}