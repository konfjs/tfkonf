import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLbTrustStoreArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsLbTrustStoreArgs {
  ca_certificates_bundle_s3_bucket: string;
  ca_certificates_bundle_s3_key: string;
  ca_certificates_bundle_s3_object_version?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsLbTrustStoreArgsTimeouts;
}
export class aws_lb_trust_store extends TerraformResource {
  readonly arn!: string;
  readonly arn_suffix!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsLbTrustStoreArgs) {
    super(config, "resource", args, resourceName, "aws_lb_trust_store");
  }
}