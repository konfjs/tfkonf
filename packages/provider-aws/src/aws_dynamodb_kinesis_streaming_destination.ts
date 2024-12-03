import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDynamodbKinesisStreamingDestinationArgs {
  stream_arn: string;
  table_name: string;
}
export class aws_dynamodb_kinesis_streaming_destination extends TerraformResource {
  readonly approximate_creation_date_time_precision?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbKinesisStreamingDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_kinesis_streaming_destination");
  }
}