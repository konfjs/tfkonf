import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageManagedFolderIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleStorageManagedFolderIamMemberArgs {
  bucket: string;
  managed_folder: string;
  member: string;
  role: string;
  condition: GoogleStorageManagedFolderIamMemberArgsCondition;
}

export class google_storage_managed_folder_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_storage_managed_folder_iam_member");
  }
}
