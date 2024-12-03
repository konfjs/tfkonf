import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudfrontPublicKeyArgs {
  comment?: string;
  encoded_key: string;
}
export class aws_cloudfront_public_key extends TerraformResource {
  readonly caller_reference!: string;
  readonly etag!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontPublicKeyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_public_key");
  }
}