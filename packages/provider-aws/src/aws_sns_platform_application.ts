import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSnsPlatformApplicationArgs {
  apple_platform_bundle_id?: string;
  apple_platform_team_id?: string;
  event_delivery_failure_topic_arn?: string;
  event_endpoint_created_topic_arn?: string;
  event_endpoint_deleted_topic_arn?: string;
  event_endpoint_updated_topic_arn?: string;
  failure_feedback_role_arn?: string;
  name: string;
  platform: string;
  platform_credential: string;
  platform_principal?: string;
  success_feedback_role_arn?: string;
  success_feedback_sample_rate?: string;
}

export class aws_sns_platform_application extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsSnsPlatformApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_sns_platform_application");
  }
}
