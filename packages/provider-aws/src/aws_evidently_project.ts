import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchLogs {
  log_group?: string;
}
export interface S3Destination {
  bucket?: string;
  prefix?: string;
}
export interface DataDelivery {
  cloudwatch_logs: CloudwatchLogs;
  s3_destination: S3Destination;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEvidentlyProjectArgs {
  description?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  data_delivery: DataDelivery;
  timeouts: Timeouts;
}
export class aws_evidently_project extends TerraformResource {
  readonly active_experiment_count!: number;
  readonly active_launch_count!: number;
  readonly arn!: string;
  readonly created_time!: string;
  readonly experiment_count!: number;
  readonly feature_count!: number;
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly launch_count!: number;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEvidentlyProjectArgs) {
    super(config, "resource", args, resourceName, "aws_evidently_project");
  }
}