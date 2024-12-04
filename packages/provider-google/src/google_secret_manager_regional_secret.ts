import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerRegionalSecretArgsCustomerManagedEncryption {
  kms_key_name: string;
}

export interface GoogleSecretManagerRegionalSecretArgsRotation {
  next_rotation_time?: string;
  rotation_period?: string;
}

export interface GoogleSecretManagerRegionalSecretArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecretManagerRegionalSecretArgsTopics {
  name: string;
}

export interface GoogleSecretManagerRegionalSecretArgs {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };
  location: string;
  secret_id: string;
  ttl?: string;
  version_aliases?: { [key: string]: string };
  version_destroy_ttl?: string;
  customer_managed_encryption: GoogleSecretManagerRegionalSecretArgsCustomerManagedEncryption;
  rotation: GoogleSecretManagerRegionalSecretArgsRotation;
  timeouts?: GoogleSecretManagerRegionalSecretArgsTimeouts;
  topics: GoogleSecretManagerRegionalSecretArgsTopics;
}

export class google_secret_manager_regional_secret extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: { [key: string]: string };
  readonly effective_labels!: { [key: string]: string };
  readonly expire_time?: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerRegionalSecretArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_regional_secret");
  }
}
