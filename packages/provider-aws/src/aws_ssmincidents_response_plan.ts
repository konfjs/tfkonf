import { TerraformConfig, TerraformResource } from "tfs";
export interface Parameter {
  name: string;
  values: string[];
}
export interface SsmAutomation {
  document_name: string;
  document_version?: string;
  dynamic_parameters?: {
    [key: string]: string;
  };
  role_arn: string;
  target_account?: string;
  parameter: Parameter;
}
export interface Action {
  ssm_automation: SsmAutomation;
}
export interface NotificationTarget {
  sns_topic_arn: string;
}
export interface IncidentTemplate {
  dedupe_string?: string;
  impact: number;
  incident_tags?: {
    [key: string]: string;
  };
  summary?: string;
  title: string;
  notification_target: NotificationTarget;
}
export interface Pagerduty {
  name: string;
  secret_id: string;
  service_id: string;
}
export interface Integration {
  pagerduty: Pagerduty;
}
export interface AwsSsmincidentsResponsePlanArgs {
  chat_channel?: string[];
  display_name?: string;
  engagements?: string[];
  name: string;
  tags?: {
    [key: string]: string;
  };
  action: Action;
  incident_template: IncidentTemplate;
  integration: Integration;
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