import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRdsIntegrationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsRdsIntegrationArgs {
  additional_encryption_context?: {
    [key: string]: string;
  };
  integration_name: string;
  source_arn: string;
  tags?: {
    [key: string]: string;
  };
  target_arn: string;
  timeouts?: AwsRdsIntegrationArgsTimeouts;
}
export class aws_rds_integration extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly kms_key_id?: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsIntegrationArgs) {
    super(config, "resource", args, resourceName, "aws_rds_integration");
  }
}