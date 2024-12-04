import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsNetworkfirewallFirewallArgsEncryptionConfiguration {
  key_id?: string;
  type: string;
}

export interface AwsNetworkfirewallFirewallArgsSubnetMapping {
  subnet_id: string;
}

export interface AwsNetworkfirewallFirewallArgsTimeouts {
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
  tags?: { [key: string]: string };
  vpc_id: string;
  encryption_configuration: AwsNetworkfirewallFirewallArgsEncryptionConfiguration;
  subnet_mapping: AwsNetworkfirewallFirewallArgsSubnetMapping;
  timeouts?: AwsNetworkfirewallFirewallArgsTimeouts;
}

export class aws_networkfirewall_firewall extends TerraformResource {
  readonly arn!: string;
  readonly firewall_status!: any[];
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly update_token!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsNetworkfirewallFirewallArgs) {
    super(config, "resource", args, resourceName, "aws_networkfirewall_firewall");
  }
}
