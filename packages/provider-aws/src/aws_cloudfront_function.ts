import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudfrontFunctionArgs {
  code: string;
  comment?: string;
  key_value_store_associations?: string[];
  name: string;
  publish?: boolean;
  runtime: string;
}
export class aws_cloudfront_function extends TerraformResource {
  readonly arn!: string;
  readonly etag!: string;
  readonly id?: string;
  readonly live_stage_etag!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontFunctionArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_function");
  }
}