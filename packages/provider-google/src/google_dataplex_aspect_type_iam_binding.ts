import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexAspectTypeIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexAspectTypeIamBindingArgs {
  aspect_type_id: string;
  members: string[];
  role: string;
  condition: GoogleDataplexAspectTypeIamBindingArgsCondition;
}

export class google_dataplex_aspect_type_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAspectTypeIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_aspect_type_iam_binding");
  }
}
