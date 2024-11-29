import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionConfiguration {
  key_id?: string;
  type: string;
}
export interface SubnetMapping {
  subnet_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsNetworkfirewallFirewallArgs {
  delete_protection?: boolean;
  description?: string;
  firewall_policy_arn: string;
  firewall_policy_change_protection?: boolean;
  name: string;
  subnet_change_protection?: boolean;
  tags?: {
    [key: string]: string;
  };
  vpc_id: string;
  encryption_configuration: EncryptionConfiguration;
  subnet_mapping: SubnetMapping;
  timeouts: Timeouts;
}
export class aws_networkfirewall_firewall extends TerraformResource {
  readonly arn!: string;
  readonly firewall_status!: any[];
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly update_token!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallFirewallArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_firewall");
  }
}