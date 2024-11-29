import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleSecretManagerSecretArgsReplicationAutoCustomerManagedEncryption {
  kms_key_name: string;
}
export interface GoogleSecretManagerSecretArgsReplicationAuto {
  customer_managed_encryption: GoogleSecretManagerSecretArgsReplicationAutoCustomerManagedEncryption;
}
export interface GoogleSecretManagerSecretArgsReplicationUserManagedReplicasCustomerManagedEncryption {
  kms_key_name: string;
}
export interface GoogleSecretManagerSecretArgsReplicationUserManagedReplicas {
  location: string;
  customer_managed_encryption: GoogleSecretManagerSecretArgsReplicationUserManagedReplicasCustomerManagedEncryption;
}
export interface GoogleSecretManagerSecretArgsReplicationUserManaged {
  replicas: GoogleSecretManagerSecretArgsReplicationUserManagedReplicas;
}
export interface GoogleSecretManagerSecretArgsReplication {
  auto: GoogleSecretManagerSecretArgsReplicationAuto;
  user_managed: GoogleSecretManagerSecretArgsReplicationUserManaged;
}
export interface GoogleSecretManagerSecretArgsRotation {
  next_rotation_time?: string;
  rotation_period?: string;
}
export interface GoogleSecretManagerSecretArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecretManagerSecretArgsTopics {
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
  replication: GoogleSecretManagerSecretArgsReplication;
  rotation: GoogleSecretManagerSecretArgsRotation;
  timeouts?: GoogleSecretManagerSecretArgsTimeouts;
  topics: GoogleSecretManagerSecretArgsTopics;
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