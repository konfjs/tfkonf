import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudfrontKeyGroupArgs {
  comment?: string;
  items: string[];
  name: string;
}
export class aws_cloudfront_key_group extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontKeyGroupArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_key_group");
  }
}