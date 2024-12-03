import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsNetworkmanagerVpcAttachmentArgsOptions {
  appliance_mode_support?: boolean;
  ipv6_support?: boolean;
}
export interface AwsNetworkmanagerVpcAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkmanagerVpcAttachmentArgs {
  core_network_id: string;
  subnet_arns: string[];
  tags?: {
    [key: string]: string;
  };
  vpc_arn: string;
  options: AwsNetworkmanagerVpcAttachmentArgsOptions;
  timeouts?: AwsNetworkmanagerVpcAttachmentArgsTimeouts;
}
export class aws_networkmanager_vpc_attachment extends TerraformResource {
  readonly arn!: string;
  readonly attachment_policy_rule_number!: number;
  readonly attachment_type!: string;
  readonly core_network_arn!: string;
  readonly edge_location!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly resource_arn!: string;
  readonly segment_name!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerVpcAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_vpc_attachment");
  }
}