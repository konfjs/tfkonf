import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigtableTableIamPolicyArgs {
  instance: string;
  policy_data: string;
  table: string;
}
export class google_bigtable_table_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigtableTableIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_bigtable_table_iam_policy");
  }
}