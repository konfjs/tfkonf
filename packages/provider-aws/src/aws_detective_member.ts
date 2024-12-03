import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDetectiveMemberArgs {
  account_id: string;
  disable_email_notification?: boolean;
  email_address: string;
  graph_arn: string;
  message?: string;
}
export class aws_detective_member extends TerraformResource {
  readonly administrator_id!: string;
  readonly disabled_reason!: string;
  readonly id?: string;
  readonly invited_time!: string;
  readonly status!: string;
  readonly updated_time!: string;
  readonly volume_usage_in_bytes!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDetectiveMemberArgs) {
    super(config, "resource", args, resourceName, "aws_detective_member");
  }
}