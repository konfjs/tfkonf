import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigtableTableIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigtableTableIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  table: string;
  condition: GoogleBigtableTableIamBindingArgsCondition;
}
export class google_bigtable_table_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_table_iam_binding");
  }
}