import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexEntryTypeIamBindingArgs {
  entry_type_id: string;
  members: string[];
  role: string;
  condition: Condition;
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