import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDataplexAspectTypeIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleDataplexAspectTypeIamMemberArgs {
  aspect_type_id: string;
  member: string;
  role: string;
  condition: GoogleDataplexAspectTypeIamMemberArgsCondition;
}
export class google_dataplex_aspect_type_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAspectTypeIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_aspect_type_iam_member");
  }
}