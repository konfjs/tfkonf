import { TerraformConfig, TerraformResource } from "tfs";
export interface PublicKey {
  id: string;
  managed?: boolean;
  value?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface ValidationSharedKeys {
  secret_version: string;
}
export interface GoogleNetworkServicesEdgeCacheKeysetArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  public_key: PublicKey;
  timeouts: Timeouts;
  validation_shared_keys: ValidationSharedKeys;
}
export class google_network_services_edge_cache_keyset extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetworkServicesEdgeCacheKeysetArgs) {
    super(config, "resource", args, resourceName, "google_network_services_edge_cache_keyset");
  }
}