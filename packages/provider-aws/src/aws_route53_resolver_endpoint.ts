import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRoute53ResolverEndpointArgsIpAddress {
  subnet_id: string;
}
export interface AwsRoute53ResolverEndpointArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRoute53ResolverEndpointArgs {
  direction: string;
  name?: string;
  security_group_ids: string[];
  tags?: {
    [key: string]: string;
  };
  ip_address: AwsRoute53ResolverEndpointArgsIpAddress;
  timeouts: AwsRoute53ResolverEndpointArgstimeouts;
}
export class aws_route53_resolver_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly host_vpc_id!: string;
  readonly id?: string;
  readonly protocols?: string[];
  readonly resolver_endpoint_type?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53ResolverEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_route53_resolver_endpoint");
  }
}