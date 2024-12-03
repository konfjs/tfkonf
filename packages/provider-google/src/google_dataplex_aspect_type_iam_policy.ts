import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDataplexAspectTypeIamPolicyArgs {
  aspect_type_id: string;
  policy_data: string;
}
export class google_dataplex_aspect_type_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAspectTypeIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_aspect_type_iam_policy");
  }
}