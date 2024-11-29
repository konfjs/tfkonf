import { TerraformConfig, TerraformResource } from "tfs";
export interface DimensionConfiguration {
  default_dimension_value: string;
  dimension_name: string;
  dimension_value_source: string;
}
export interface CloudWatchDestination {
  dimension_configuration: DimensionConfiguration;
}
export interface EventBridgeDestination {
  event_bus_arn: string;
}
export interface KinesisFirehoseDestination {
  delivery_stream_arn: string;
  iam_role_arn: string;
}
export interface PinpointDestination {
  application_arn: string;
}
export interface SnsDestination {
  topic_arn: string;
}
export interface EventDestination {
  enabled?: boolean;
  matching_event_types: string[];
  cloud_watch_destination: CloudWatchDestination;
  event_bridge_destination: EventBridgeDestination;
  kinesis_firehose_destination: KinesisFirehoseDestination;
  pinpoint_destination: PinpointDestination;
  sns_destination: SnsDestination;
}
export interface AwsSesv2ConfigurationSetEventDestinationArgs {
  configuration_set_name: string;
  event_destination_name: string;
  event_destination: EventDestination;
}
export class aws_sesv2_configuration_set_event_destination extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2ConfigurationSetEventDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_configuration_set_event_destination");
  }
}