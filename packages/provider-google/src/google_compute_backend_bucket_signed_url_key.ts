import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleComputeBackendBucketSignedUrlKeyArgs {
  backend_bucket: string;
  key_value: string;
  name: string;
  timeouts: Timeouts;
}
export class google_compute_backend_bucket_signed_url_key extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeBackendBucketSignedUrlKeyArgs) {
    super(config, "resource", args, resourceName, "google_compute_backend_bucket_signed_url_key");
  }
}