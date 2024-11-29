import { TerraformConfig, TerraformResource } from "tfs";
export interface HttpsNotificationConfiguration {
  authorization_api_key_name?: string;
  authorization_api_key_value?: string;
  endpoint: string;
  http_method?: string;
  target_role_arn: string;
}
export interface SqsNotificationConfiguration {}
export interface Configuration {
  https_notification_configuration: HttpsNotificationConfiguration;
  sqs_notification_configuration: SqsNotificationConfiguration;
}
export interface AwsSecuritylakeSubscriberNotificationArgs {
  subscriber_id: string;
  configuration: Configuration;
}
export class aws_securitylake_subscriber_notification extends TerraformResource {
  readonly endpoint_id!: string;
  readonly id!: string;
  readonly subscriber_endpoint!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecuritylakeSubscriberNotificationArgs) {
    super(config, "resource", args, resourceName, "aws_securitylake_subscriber_notification");
  }
}