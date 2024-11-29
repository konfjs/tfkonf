import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsVpcSecurityGroupIngressRuleArgs {
  cidr_ipv4?: string;
  cidr_ipv6?: string;
  description?: string;
  from_port?: number;
  ip_protocol: string;
  prefix_list_id?: string;
  referenced_security_group_id?: string;
  security_group_id: string;
  tags?: {
    [key: string]: string;
  };
  to_port?: number;
}
export class aws_vpc_security_group_ingress_rule extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly security_group_rule_id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcSecurityGroupIngressRuleArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_security_group_ingress_rule");
  }
}