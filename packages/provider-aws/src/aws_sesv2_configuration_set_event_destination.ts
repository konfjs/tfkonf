import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationCloudWatchDestinationDimensionConfiguration {
  default_dimension_value: string;
  dimension_name: string;
  dimension_value_source: string;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationCloudWatchDestination {
  dimension_configuration: AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationCloudWatchDestinationDimensionConfiguration;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationEventBridgeDestination {
  event_bus_arn: string;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationKinesisFirehoseDestination {
  delivery_stream_arn: string;
  iam_role_arn: string;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationPinpointDestination {
  application_arn: string;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationSnsDestination {
  topic_arn: string;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgsEventDestination {
  enabled?: boolean;
  matching_event_types: string[];
  cloud_watch_destination: AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationCloudWatchDestination;
  event_bridge_destination: AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationEventBridgeDestination;
  kinesis_firehose_destination: AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationKinesisFirehoseDestination;
  pinpoint_destination: AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationPinpointDestination;
  sns_destination: AwsSesv2ConfigurationSetEventDestinationArgsEventDestinationSnsDestination;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgs {
  configuration_set_name: string;
  event_destination_name: string;
  event_destination: AwsSesv2ConfigurationSetEventDestinationArgsEventDestination;
}
export class aws_sesv2_configuration_set_event_destination extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2ConfigurationSetEventDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_configuration_set_event_destination");
  }
}