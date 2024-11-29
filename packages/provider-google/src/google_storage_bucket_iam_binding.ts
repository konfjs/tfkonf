import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleStorageBucketIamBindingArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleStorageBucketIamBindingArgs {
  bucket: string;
  members: string[];
  role: string;
  condition: GoogleStorageBucketIamBindingArgscondition;
}
export class google_storage_bucket_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_iam_binding");
  }
}