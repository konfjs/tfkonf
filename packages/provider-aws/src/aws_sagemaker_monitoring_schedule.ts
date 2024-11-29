import { TerraformConfig, TerraformResource } from "tfs";
export interface ScheduleConfig {
  schedule_expression: string;
}
export interface MonitoringScheduleConfig {
  monitoring_job_definition_name: string;
  monitoring_type: string;
  schedule_config: ScheduleConfig;
}
export interface AwsSagemakerMonitoringScheduleArgs {
  tags?: {
    [key: string]: string;
  };
  monitoring_schedule_config: MonitoringScheduleConfig;
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