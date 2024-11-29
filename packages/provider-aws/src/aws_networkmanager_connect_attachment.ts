import { TerraformConfig, TerraformResource } from "tfs";
export interface Options {
  protocol?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsNetworkmanagerConnectAttachmentArgs {
  core_network_id: string;
  edge_location: string;
  tags?: {
    [key: string]: string;
  };
  transport_attachment_id: string;
  options: Options;
  timeouts: Timeouts;
}
export class aws_networkmanager_connect_attachment extends TerraformResource {
  readonly arn!: string;
  readonly attachment_id!: string;
  readonly attachment_policy_rule_number!: number;
  readonly attachment_type!: string;
  readonly core_network_arn!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly resource_arn!: string;
  readonly segment_name!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerConnectAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_connect_attachment");
  }
}