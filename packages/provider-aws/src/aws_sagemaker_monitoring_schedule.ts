import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfigScheduleConfig {
  schedule_expression: string;
}
export interface AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfig {
  monitoring_job_definition_name: string;
  monitoring_type: string;
  schedule_config: AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfigScheduleConfig;
}
export interface AwsSagemakerMonitoringScheduleArgs {
  tags?: {
    [key: string]: string;
  };
  monitoring_schedule_config: AwsSagemakerMonitoringScheduleArgsMonitoringScheduleConfig;
}
export class aws_sagemaker_monitoring_schedule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerMonitoringScheduleArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_monitoring_schedule");
  }
}