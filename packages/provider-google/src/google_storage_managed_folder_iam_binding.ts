import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleStorageManagedFolderIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleStorageManagedFolderIamBindingArgs {
  bucket: string;
  managed_folder: string;
  members: string[];
  role: string;
  condition: GoogleStorageManagedFolderIamBindingArgscondition;
}
export class google_storage_managed_folder_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageManagedFolderIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_storage_managed_folder_iam_binding");
  }
}