import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
}
export interface AwsCloudfrontKeyValueStoreArgs {
  comment?: string;
  name: string;
  timeouts: Timeouts;
}
export class aws_cloudfront_key_value_store extends TerraformResource {
  readonly arn!: string;
  readonly etag!: string;
  readonly id!: string;
  readonly last_modified_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontKeyValueStoreArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_key_value_store");
  }
}