import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightAccountSubscriptionArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
}
export interface AwsQuicksightAccountSubscriptionArgs {
  account_name: string;
  active_directory_name?: string;
  admin_group?: string[];
  authentication_method: string;
  author_group?: string[];
  contact_number?: string;
  directory_id?: string;
  edition: string;
  email_address?: string;
  first_name?: string;
  iam_identity_center_instance_arn?: string;
  last_name?: string;
  notification_email: string;
  reader_group?: string[];
  realm?: string;
  timeouts: AwsQuicksightAccountSubscriptionArgsTimeouts;
}
export class aws_quicksight_account_subscription extends TerraformResource {
  readonly account_subscription_status!: string;
  readonly aws_account_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightAccountSubscriptionArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_account_subscription");
  }
}