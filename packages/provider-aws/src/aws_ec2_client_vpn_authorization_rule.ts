import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsEc2ClientVpnAuthorizationRuleArgs {
  access_group_id?: string;
  authorize_all_groups?: boolean;
  client_vpn_endpoint_id: string;
  description?: string;
  target_network_cidr: string;
  timeouts: Timeouts;
}
export class aws_ec2_client_vpn_authorization_rule extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2ClientVpnAuthorizationRuleArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_client_vpn_authorization_rule");
  }
}