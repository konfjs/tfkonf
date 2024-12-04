import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsCustomKeyStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsKmsCustomKeyStoreArgs {
  cloud_hsm_cluster_id: string;
  custom_key_store_name: string;
  key_store_password: string;
  trust_anchor_certificate: string;
  timeouts?: AwsKmsCustomKeyStoreArgsTimeouts;
}

export class aws_kms_custom_key_store extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsCustomKeyStoreArgs) {
    super(config, "resource", args, resourceName, "aws_kms_custom_key_store");
  }
}
