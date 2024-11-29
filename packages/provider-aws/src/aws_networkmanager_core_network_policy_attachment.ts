import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  update?: string;
}
export interface AwsNetworkmanagerCoreNetworkPolicyAttachmentArgs {
  core_network_id: string;
  policy_document: string;
  timeouts: Timeouts;
}
export class aws_networkmanager_core_network_policy_attachment extends TerraformResource {
  readonly id?: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkmanagerCoreNetworkPolicyAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_networkmanager_core_network_policy_attachment");
  }
}