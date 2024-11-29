import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmincidentsResponsePlanArgsActionSsmAutomationParameter {
  name: string;
  values: string[];
}
export interface AwsSsmincidentsResponsePlanArgsActionSsmAutomation {
  document_name: string;
  document_version?: string;
  dynamic_parameters?: {
    [key: string]: string;
  };
  role_arn: string;
  target_account?: string;
  parameter: AwsSsmincidentsResponsePlanArgsActionSsmAutomationParameter;
}
export interface AwsSsmincidentsResponsePlanArgsAction {
  ssm_automation: AwsSsmincidentsResponsePlanArgsActionSsmAutomation;
}
export interface AwsSsmincidentsResponsePlanArgsIncidentTemplateNotificationTarget {
  sns_topic_arn: string;
}
export interface AwsSsmincidentsResponsePlanArgsIncidentTemplate {
  dedupe_string?: string;
  impact: number;
  incident_tags?: {
    [key: string]: string;
  };
  summary?: string;
  title: string;
  notification_target: AwsSsmincidentsResponsePlanArgsIncidentTemplateNotificationTarget;
}
export interface AwsSsmincidentsResponsePlanArgsIntegrationPagerduty {
  name: string;
  secret_id: string;
  service_id: string;
}
export interface AwsSsmincidentsResponsePlanArgsIntegration {
  pagerduty: AwsSsmincidentsResponsePlanArgsIntegrationPagerduty;
}
export interface AwsSsmincidentsResponsePlanArgs {
  chat_channel?: string[];
  display_name?: string;
  engagements?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  action: AwsSsmincidentsResponsePlanArgsAction;
  incident_template: AwsSsmincidentsResponsePlanArgsIncidentTemplate;
  integration: AwsSsmincidentsResponsePlanArgsIntegration;
}
export class aws_ssmincidents_response_plan extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmincidentsResponsePlanArgs) {
    super(config, "resource", args, resourceName, "aws_ssmincidents_response_plan");
  }
}