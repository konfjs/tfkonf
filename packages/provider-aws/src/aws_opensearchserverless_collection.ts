import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchserverlessCollectionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsOpensearchserverlessCollectionArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  timeouts?: AwsOpensearchserverlessCollectionArgsTimeouts;
}

export class aws_opensearchserverless_collection extends TerraformResource {
  readonly arn!: string;
  readonly collection_endpoint!: string;
  readonly dashboard_endpoint!: string;
  readonly id!: string;
  readonly kms_key_arn!: string;
  readonly standby_replicas?: string;
  readonly tags_all!: { [key: string]: string };
  readonly type?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessCollectionArgs) {
    super(config, "resource", args, resourceName, "aws_opensearchserverless_collection");
  }
}
