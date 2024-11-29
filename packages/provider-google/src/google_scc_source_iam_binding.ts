import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSccSourceIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleSccSourceIamBindingArgs {
  members: string[];
  organization: string;
  role: string;
  source: string;
  condition: GoogleSccSourceIamBindingArgscondition;
}
export class google_scc_source_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSccSourceIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_scc_source_iam_binding");
  }
}