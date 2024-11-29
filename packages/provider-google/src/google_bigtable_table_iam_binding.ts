import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleBigtableTableIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleBigtableTableIamBindingArgs {
  instance: string;
  members: string[];
  role: string;
  table: string;
  condition: GoogleBigtableTableIamBindingArgscondition;
}
export class google_bigtable_table_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_table_iam_binding");
  }
}