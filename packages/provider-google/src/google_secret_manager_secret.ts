import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecretManagerSecretArgsreplicationautoCustomerManagedEncryption {
  kms_key_name: string;
}
export interface GoogleSecretManagerSecretArgsreplicationauto {
  customer_managed_encryption: GoogleSecretManagerSecretArgsreplicationautoCustomerManagedEncryption;
}
export interface GoogleSecretManagerSecretArgsreplicationUserManagedreplicasCustomerManagedEncryption {
  kms_key_name: string;
}
export interface GoogleSecretManagerSecretArgsreplicationUserManagedreplicas {
  location: string;
  customer_managed_encryption: GoogleSecretManagerSecretArgsreplicationUserManagedreplicasCustomerManagedEncryption;
}
export interface GoogleSecretManagerSecretArgsreplicationUserManaged {
  replicas: GoogleSecretManagerSecretArgsreplicationUserManagedreplicas;
}
export interface GoogleSecretManagerSecretArgsreplication {
  auto: GoogleSecretManagerSecretArgsreplicationauto;
  user_managed: GoogleSecretManagerSecretArgsreplicationUserManaged;
}
export interface GoogleSecretManagerSecretArgsrotation {
  next_rotation_time?: string;
  rotation_period?: string;
}
export interface GoogleSecretManagerSecretArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecretManagerSecretArgstopics {
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
  replication: GoogleSecretManagerSecretArgsreplication;
  rotation: GoogleSecretManagerSecretArgsrotation;
  timeouts: GoogleSecretManagerSecretArgstimeouts;
  topics: GoogleSecretManagerSecretArgstopics;
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