import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectRoutingProfileArgsMediaConcurrencies {
  channel: string;
  concurrency: number;
}
export interface AwsConnectRoutingProfileArgsQueueConfigs {
  channel: string;
  delay: number;
  priority: number;
  queue_id: string;
}
export interface AwsConnectRoutingProfileArgs {
  default_outbound_queue_id: string;
  description: string;
  instance_id: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  media_concurrencies: AwsConnectRoutingProfileArgsMediaConcurrencies;
  queue_configs: AwsConnectRoutingProfileArgsQueueConfigs;
}
export class aws_connect_routing_profile extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly routing_profile_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectRoutingProfileArgs) {
    super(config, "resource", args, resourceName, "aws_connect_routing_profile");
  }
}