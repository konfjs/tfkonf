import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleStorageBucketIamPolicyArgs {
  bucket: string;
  policy_data: string;
}

export class google_storage_bucket_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageBucketIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_storage_bucket_iam_policy");
  }
}
