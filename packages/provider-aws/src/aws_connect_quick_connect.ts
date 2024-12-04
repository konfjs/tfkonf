import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectQuickConnectArgsQuickConnectConfigPhoneConfig {
  phone_number: string;
}

export interface AwsConnectQuickConnectArgsQuickConnectConfigQueueConfig {
  contact_flow_id: string;
  queue_id: string;
}

export interface AwsConnectQuickConnectArgsQuickConnectConfigUserConfig {
  contact_flow_id: string;
  user_id: string;
}

export interface AwsConnectQuickConnectArgsQuickConnectConfig {
  quick_connect_type: string;
  phone_config: AwsConnectQuickConnectArgsQuickConnectConfigPhoneConfig;
  queue_config: AwsConnectQuickConnectArgsQuickConnectConfigQueueConfig;
  user_config: AwsConnectQuickConnectArgsQuickConnectConfigUserConfig;
}

export interface AwsConnectQuickConnectArgs {
  description?: string;
  instance_id: string;
  name: string;
  tags?: { [key: string]: string };
  quick_connect_config: AwsConnectQuickConnectArgsQuickConnectConfig;
}

export class aws_connect_quick_connect extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly quick_connect_id!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectQuickConnectArgs) {
    super(config, "resource", args, resourceName, "aws_connect_quick_connect");
  }
}
