import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDefaultNetworkAclArgsEgress {
  action: string;
  cidr_block?: string;
  from_port: number;
  icmp_code?: number;
  icmp_type?: number;
  ipv6_cidr_block?: string;
  protocol: string;
  rule_no: number;
  to_port: number;
}
export interface AwsDefaultNetworkAclArgsIngress {
  action: string;
  cidr_block?: string;
  from_port: number;
  icmp_code?: number;
  icmp_type?: number;
  ipv6_cidr_block?: string;
  protocol: string;
  rule_no: number;
  to_port: number;
}
export interface AwsDefaultNetworkAclArgs {
  default_network_acl_id: string;
  subnet_ids?: string[];
  tags?: {
    [key: string]: string;
  };
  egress: AwsDefaultNetworkAclArgsEgress;
  ingress: AwsDefaultNetworkAclArgsIngress;
}
export class aws_default_network_acl extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDefaultNetworkAclArgs) {
    super(config, "resource", args, resourceName, "aws_default_network_acl");
  }
}