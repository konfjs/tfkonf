import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEc2InstanceConnectEndpointArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsEc2InstanceConnectEndpointArgs {
  subnet_id: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsEc2InstanceConnectEndpointArgsTimeouts;
}
export class aws_ec2_instance_connect_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly availability_zone!: string;
  readonly dns_name!: string;
  readonly fips_dns_name!: string;
  readonly id!: string;
  readonly network_interface_ids!: string[];
  readonly owner_id!: string;
  readonly preserve_client_ip?: boolean;
  readonly security_group_ids?: string[];
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2InstanceConnectEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_instance_connect_endpoint");
  }
}