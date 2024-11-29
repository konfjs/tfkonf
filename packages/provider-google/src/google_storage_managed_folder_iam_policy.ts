import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageManagedFolderIamPolicyArgs {
  bucket: string;
  managed_folder: string;
  policy_data: string;
}
export class google_storage_managed_folder_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_storage_managed_folder_iam_policy");
  }
}