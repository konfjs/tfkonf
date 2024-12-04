import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexEntryGroupIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexEntryGroupIamBindingArgs {
  entry_group_id: string;
  members: string[];
  role: string;
  condition: GoogleDataplexEntryGroupIamBindingArgsCondition;
}

export class google_dataplex_entry_group_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexEntryGroupIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_entry_group_iam_binding");
  }
}
