import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchDestination {
  default_value: string;
  dimension_name: string;
  value_source: string;
}
export interface KinesisDestination {
  role_arn: string;
  stream_arn: string;
}
export interface SnsDestination {
  topic_arn: string;
}
export interface AwsSesEventDestinationArgs {
  configuration_set_name: string;
  enabled?: boolean;
  matching_types: string[];
  name: string;
  cloudwatch_destination: CloudwatchDestination;
  kinesis_destination: KinesisDestination;
  sns_destination: SnsDestination;
}
export class aws_ses_event_destination extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesEventDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_ses_event_destination");
  }
}