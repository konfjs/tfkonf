import { TerraformConfig, TerraformResource } from "tfs";
export interface KinesisConfiguration {
  aggregation_enabled?: boolean;
  stream_arn: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsQldbStreamArgs {
  exclusive_end_time?: string;
  inclusive_start_time: string;
  ledger_name: string;
  role_arn: string;
  stream_name: string;
  tags?: {
    [key: string]: string;
  };
  kinesis_configuration: KinesisConfiguration;
  timeouts: Timeouts;
}
export class aws_qldb_stream extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsQldbStreamArgs) {
    super(config, "resource", args, resourceName, "aws_qldb_stream");
  }
}