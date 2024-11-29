import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsKinesisStreamConsumerArgs {
  name: string;
  stream_arn: string;
}
export class aws_kinesis_stream_consumer extends TerraformResource {
  readonly arn!: string;
  readonly creation_timestamp!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKinesisStreamConsumerArgs) {
    super(config, "resource", args, resourceName, "aws_kinesis_stream_consumer");
  }
}