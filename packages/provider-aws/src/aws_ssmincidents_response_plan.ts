import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmincidentsResponsePlanArgsactionSsmAutomationparameter {
  name: string;
  values: string[];
}
export interface AwsSsmincidentsResponsePlanArgsactionSsmAutomation {
  document_name: string;
  document_version?: string;
  dynamic_parameters?: {
    [key: string]: string;
  };
  role_arn: string;
  target_account?: string;
  parameter: AwsSsmincidentsResponsePlanArgsactionSsmAutomationparameter;
}
export interface AwsSsmincidentsResponsePlanArgsaction {
  ssm_automation: AwsSsmincidentsResponsePlanArgsactionSsmAutomation;
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
export interface AwsSsmincidentsResponsePlanArgsintegrationpagerduty {
  name: string;
  secret_id: string;
  service_id: string;
}
export interface AwsSsmincidentsResponsePlanArgsintegration {
  pagerduty: AwsSsmincidentsResponsePlanArgsintegrationpagerduty;
}
export interface AwsSsmincidentsResponsePlanArgs {
  chat_channel?: string[];
  display_name?: string;
  engagements?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  action: AwsSsmincidentsResponsePlanArgsaction;
  incident_template: AwsSsmincidentsResponsePlanArgsIncidentTemplate;
  integration: AwsSsmincidentsResponsePlanArgsintegration;
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