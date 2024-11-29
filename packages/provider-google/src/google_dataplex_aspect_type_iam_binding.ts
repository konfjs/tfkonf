import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexAspectTypeIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexAspectTypeIamBindingArgs {
  aspect_type_id: string;
  members: string[];
  role: string;
  condition: GoogleDataplexAspectTypeIamBindingArgscondition;
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