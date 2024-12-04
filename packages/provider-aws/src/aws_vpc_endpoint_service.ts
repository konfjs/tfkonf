import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVpcEndpointServiceArgs {
  acceptance_required: boolean;
  gateway_load_balancer_arns?: string[];
  network_load_balancer_arns?: string[];
  tags?: { [key: string]: string };
  timeouts?: AwsVpcEndpointServiceArgsTimeouts;
}

export class aws_vpc_endpoint_service extends TerraformResource {
  readonly allowed_principals?: string[];
  readonly arn!: string;
  readonly availability_zones!: string[];
  readonly base_endpoint_dns_names!: string[];
  readonly id?: string;
  readonly manages_vpc_endpoints!: boolean;
  readonly private_dns_name?: string;
  readonly private_dns_name_configuration!: any[];
  readonly service_name!: string;
  readonly service_type!: string;
  readonly state!: string;
  readonly supported_ip_address_types?: string[];
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointServiceArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_service");
  }
}
