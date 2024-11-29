import { TerraformConfig, TerraformResource } from "tfs";
export interface HighAction {
  event_action: string;
  notify: boolean;
}
export interface LowAction {
  event_action: string;
  notify: boolean;
}
export interface MediumAction {
  event_action: string;
  notify: boolean;
}
export interface Actions {
  high_action: HighAction;
  low_action: LowAction;
  medium_action: MediumAction;
}
export interface BlockEmail {
  html_body: string;
  subject: string;
  text_body: string;
}
export interface MfaEmail {
  html_body: string;
  subject: string;
  text_body: string;
}
export interface NoActionEmail {
  html_body: string;
  subject: string;
  text_body: string;
}
export interface NotifyConfiguration {
  from?: string;
  reply_to?: string;
  source_arn: string;
  block_email: BlockEmail;
  mfa_email: MfaEmail;
  no_action_email: NoActionEmail;
}
export interface AccountTakeoverRiskConfiguration {
  actions: Actions;
  notify_configuration: NotifyConfiguration;
}
export interface Actions {
  event_action: string;
}
export interface CompromisedCredentialsRiskConfiguration {
  actions: Actions;
}
export interface RiskExceptionConfiguration {
  blocked_ip_range_list?: string[];
  skipped_ip_range_list?: string[];
}
export interface AwsCognitoRiskConfigurationArgs {
  client_id?: string;
  user_pool_id: string;
  account_takeover_risk_configuration: AccountTakeoverRiskConfiguration;
  compromised_credentials_risk_configuration: CompromisedCredentialsRiskConfiguration;
  risk_exception_configuration: RiskExceptionConfiguration;
}
export class aws_cognito_risk_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCognitoRiskConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_cognito_risk_configuration");
  }
}