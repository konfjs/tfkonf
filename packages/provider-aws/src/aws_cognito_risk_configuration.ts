import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsHighAction {
  event_action: string;
  notify: boolean;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsLowAction {
  event_action: string;
  notify: boolean;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsMediumAction {
  event_action: string;
  notify: boolean;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActions {
  high_action: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsHighAction;
  low_action: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsLowAction;
  medium_action: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActionsMediumAction;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail {
  html_body: string;
  subject: string;
  text_body: string;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail {
  html_body: string;
  subject: string;
  text_body: string;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail {
  html_body: string;
  subject: string;
  text_body: string;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfiguration {
  from?: string;
  reply_to?: string;
  source_arn: string;
  block_email: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationBlockEmail;
  mfa_email: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationMfaEmail;
  no_action_email: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfigurationNoActionEmail;
}
export interface AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfiguration {
  actions: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationActions;
  notify_configuration: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfigurationNotifyConfiguration;
}
export interface AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfigurationActions {
  event_action: string;
}
export interface AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfiguration {
  actions: AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfigurationActions;
}
export interface AwsCognitoRiskConfigurationArgsRiskExceptionConfiguration {
  blocked_ip_range_list?: string[];
  skipped_ip_range_list?: string[];
}
export interface AwsCognitoRiskConfigurationArgs {
  client_id?: string;
  user_pool_id: string;
  account_takeover_risk_configuration: AwsCognitoRiskConfigurationArgsAccountTakeoverRiskConfiguration;
  compromised_credentials_risk_configuration: AwsCognitoRiskConfigurationArgsCompromisedCredentialsRiskConfiguration;
  risk_exception_configuration: AwsCognitoRiskConfigurationArgsRiskExceptionConfiguration;
}
export class aws_cognito_risk_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoRiskConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_risk_configuration");
  }
}