import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexEntryTypeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexEntryTypeIamBindingArgs {
  entry_type_id: string;
  members: string[];
  role: string;
  condition: GoogleDataplexEntryTypeIamBindingArgsCondition;
}
export class google_dataplex_entry_type_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryTypeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_type_iam_binding");
  }
}