import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeBackendServiceSignedUrlKeyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeBackendServiceSignedUrlKeyArgs {
  backend_service: string;
  key_value: string;
  name: string;
  timeouts?: GoogleComputeBackendServiceSignedUrlKeyArgsTimeouts;
}

export class google_compute_backend_service_signed_url_key extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeBackendServiceSignedUrlKeyArgs) {
    super(config, "resource", args, resourceName, "google_compute_backend_service_signed_url_key");
  }
}
