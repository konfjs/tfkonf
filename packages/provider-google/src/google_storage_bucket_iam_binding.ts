import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleStorageBucketIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleStorageBucketIamBindingArgs {
  bucket: string;
  members: string[];
  role: string;
  condition: GoogleStorageBucketIamBindingArgsCondition;
}
export class google_storage_bucket_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_iam_binding");
  }
}