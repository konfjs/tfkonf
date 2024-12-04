import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesEdgeCacheKeysetArgsPublicKey {
  id: string;
  managed?: boolean;
  value?: string;
}

export interface GoogleNetworkServicesEdgeCacheKeysetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesEdgeCacheKeysetArgsValidationSharedKeys {
  secret_version: string;
}

export interface GoogleNetworkServicesEdgeCacheKeysetArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  public_key: GoogleNetworkServicesEdgeCacheKeysetArgsPublicKey;
  timeouts?: GoogleNetworkServicesEdgeCacheKeysetArgsTimeouts;
  validation_shared_keys: GoogleNetworkServicesEdgeCacheKeysetArgsValidationSharedKeys;
}

export class google_network_services_edge_cache_keyset extends TerraformResource {
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesEdgeCacheKeysetArgs) {
    super(config, "resource", args, resourceName, "google_network_services_edge_cache_keyset");
  }
}
