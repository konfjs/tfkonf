import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSesEventDestinationArgsCloudwatchDestination {
  default_value: string;
  dimension_name: string;
  value_source: string;
}
export interface AwsSesEventDestinationArgsKinesisDestination {
  role_arn: string;
  stream_arn: string;
}
export interface AwsSesEventDestinationArgsSnsDestination {
  topic_arn: string;
}
export interface AwsSesEventDestinationArgs {
  configuration_set_name: string;
  enabled?: boolean;
  matching_types: string[];
  name: string;
  cloudwatch_destination: AwsSesEventDestinationArgsCloudwatchDestination;
  kinesis_destination: AwsSesEventDestinationArgsKinesisDestination;
  sns_destination: AwsSesEventDestinationArgsSnsDestination;
}
export class aws_ses_event_destination extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesEventDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_ses_event_destination");
  }
}