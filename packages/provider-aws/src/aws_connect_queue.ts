import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsConnectQueueArgsOutboundCallerConfig {
  outbound_caller_id_name?: string;
  outbound_caller_id_number_id?: string;
  outbound_flow_id?: string;
}
export interface AwsConnectQueueArgs {
  description?: string;
  hours_of_operation_id: string;
  instance_id: string;
  max_contacts?: number;
  name: string;
  quick_connect_ids?: string[];
  tags?: {
    [key: string]: string;
  };
  outbound_caller_config: AwsConnectQueueArgsOutboundCallerConfig;
}
export class aws_connect_queue extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly queue_id!: string;
  readonly status?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectQueueArgs) {
    super(config, "resource", args, resourceName, "aws_connect_queue");
  }
}