import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsVerifiedaccessGroupArgsSseConfiguration {
  customer_managed_key_enabled?: boolean;
  kms_key_arn?: string;
}
export interface AwsVerifiedaccessGroupArgs {
  policy_document?: string;
  tags?: {
    [key: string]: string;
  };
  verifiedaccess_instance_id: string;
  sse_configuration: AwsVerifiedaccessGroupArgsSseConfiguration;
}
export class aws_verifiedaccess_group extends TerraformResource {
  readonly creation_time!: string;
  readonly deletion_time!: string;
  readonly description?: string;
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly verifiedaccess_group_arn!: string;
  readonly verifiedaccess_group_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsVerifiedaccessGroupArgs) {
    super(config, "resource", args, resourceName, "aws_verifiedaccess_group");
  }
}