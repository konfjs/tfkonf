import { TerraformConfig, TerraformResource } from "tfs";
export interface DestinationOptions {
  file_format?: string;
  hive_compatible_partitions?: boolean;
  per_hour_partition?: boolean;
}
export interface AwsFlowLogArgs {
  deliver_cross_account_role?: string;
  eni_id?: string;
  iam_role_arn?: string;
  log_destination_type?: string;
  max_aggregation_interval?: number;
  subnet_id?: string;
  tags?: {
    [key: string]: string;
  };
  traffic_type?: string;
  transit_gateway_attachment_id?: string;
  transit_gateway_id?: string;
  vpc_id?: string;
  destination_options: DestinationOptions;
}
export class aws_flow_log extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly log_destination?: string;
  readonly log_format?: string;
  readonly log_group_name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsFlowLogArgs) {
    super(config, "resource", args, resourceName, "aws_flow_log");
  }
}