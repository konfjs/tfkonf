import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsQuicksightNamespaceArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsQuicksightNamespaceArgs {
  namespace: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsQuicksightNamespaceArgsTimeouts;
}
export class aws_quicksight_namespace extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly capacity_region!: string;
  readonly creation_status!: string;
  readonly id!: string;
  readonly identity_store?: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightNamespaceArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_namespace");
  }
}