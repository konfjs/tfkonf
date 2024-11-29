import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGlueJobArgsCommand {
  name?: string;
  script_location: string;
}
export interface AwsGlueJobArgsExecutionProperty {
  max_concurrent_runs?: number;
}
export interface AwsGlueJobArgsNotificationProperty {
  notify_delay_after?: number;
}
export interface AwsGlueJobArgs {
  connections?: string[];
  default_arguments?: {
    [key: string]: string;
  };
  description?: string;
  execution_class?: string;
  job_run_queuing_enabled?: boolean;
  maintenance_window?: string;
  max_retries?: number;
  name: string;
  non_overridable_arguments?: {
    [key: string]: string;
  };
  role_arn: string;
  security_configuration?: string;
  tags?: {
    [key: string]: string;
  };
  command: AwsGlueJobArgsCommand;
  execution_property: AwsGlueJobArgsExecutionProperty;
  notification_property: AwsGlueJobArgsNotificationProperty;
}
export class aws_glue_job extends TerraformResource {
  readonly arn!: string;
  readonly glue_version?: string;
  readonly id?: string;
  readonly max_capacity?: number;
  readonly number_of_workers?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly timeout?: number;
  readonly worker_type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueJobArgs) {
    super(config, "resource", args, resourceName, "aws_glue_job");
  }
}