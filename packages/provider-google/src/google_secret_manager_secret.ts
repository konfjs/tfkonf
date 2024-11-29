import { TerraformConfig, TerraformResource } from "tfs";
export interface CustomerManagedEncryption {
  kms_key_name: string;
}
export interface Auto {
  customer_managed_encryption: CustomerManagedEncryption;
}
export interface CustomerManagedEncryption {
  kms_key_name: string;
}
export interface Replicas {
  location: string;
  customer_managed_encryption: CustomerManagedEncryption;
}
export interface UserManaged {
  replicas: Replicas;
}
export interface Replication {
  auto: Auto;
  user_managed: UserManaged;
}
export interface Rotation {
  next_rotation_time?: string;
  rotation_period?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Topics {
  name: string;
}
export interface GoogleSecretManagerSecretArgs {
  annotations?: {
    [key: string]: string;
  };
  labels?: {
    [key: string]: string;
  };
  secret_id: string;
  ttl?: string;
  version_aliases?: {
    [key: string]: string;
  };
  version_destroy_ttl?: string;
  replication: Replication;
  rotation: Rotation;
  timeouts: Timeouts;
  topics: Topics;
}
export class google_secret_manager_secret extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly expire_time?: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecretManagerSecretArgs) {
    super(config, "resource", args, resourceName, "google_secret_manager_secret");
  }
}