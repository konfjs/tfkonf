import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleStorageBucketIamMemberArgs {
  bucket: string;
  member: string;
  role: string;
  condition: Condition;
}
export class google_storage_bucket_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_iam_member");
  }
}