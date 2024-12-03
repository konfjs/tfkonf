import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSecuritylakeSubscriberNotificationArgsConfigurationHttpsNotificationConfiguration {
  authorization_api_key_name?: string;
  authorization_api_key_value?: string;
  endpoint: string;
  http_method?: string;
  target_role_arn: string;
}
export interface AwsSecuritylakeSubscriberNotificationArgsConfigurationSqsNotificationConfiguration {}
export interface AwsSecuritylakeSubscriberNotificationArgsConfiguration {
  https_notification_configuration: AwsSecuritylakeSubscriberNotificationArgsConfigurationHttpsNotificationConfiguration;
  sqs_notification_configuration: AwsSecuritylakeSubscriberNotificationArgsConfigurationSqsNotificationConfiguration;
}
export interface AwsSecuritylakeSubscriberNotificationArgs {
  subscriber_id: string;
  configuration: AwsSecuritylakeSubscriberNotificationArgsConfiguration;
}
export class aws_securitylake_subscriber_notification extends TerraformResource {
  readonly endpoint_id!: string;
  readonly id!: string;
  readonly subscriber_endpoint!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecuritylakeSubscriberNotificationArgs) {
    super(config, "resource", args, resourceName, "aws_securitylake_subscriber_notification");
  }
}