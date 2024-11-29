import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNetworkmanagerAttachmentAccepterArgstimeouts {
  create?: string;
}
export interface AwsNetworkmanagerAttachmentAccepterArgs {
  attachment_id: string;
  attachment_type: string;
  timeouts: AwsNetworkmanagerAttachmentAccepterArgstimeouts;
}
export class aws_networkmanager_attachment_accepter extends TerraformResource {
  readonly attachment_policy_rule_number!: number;
  readonly core_network_arn!: string;
  readonly core_network_id!: string;
  readonly edge_location!: string;
  readonly id?: string;
  readonly owner_account_id!: string;
  readonly resource_arn!: string;
  readonly segment_name!: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerAttachmentAccepterArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_attachment_accepter");
  }
}