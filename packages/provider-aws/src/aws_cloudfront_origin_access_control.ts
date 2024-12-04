import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontOriginAccessControlArgs {
  description?: string;
  name: string;
  origin_access_control_origin_type: string;
  signing_behavior: string;
  signing_protocol: string;
}

export class aws_cloudfront_origin_access_control extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontOriginAccessControlArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_origin_access_control");
  }
}
