import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleFolderIamPolicyArgs {
  folder: string;
  policy_data: string;
}
export class google_folder_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_folder_iam_policy");
  }
}