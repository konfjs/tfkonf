import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53VpcAssociationAuthorizationArgs {
  vpc_id: string;
  zone_id: string;
}

export class aws_route53_vpc_association_authorization extends TerraformResource {
  readonly id?: string;
  readonly vpc_region?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53VpcAssociationAuthorizationArgs) {
    super(config, "resource", args, resourceName, "aws_route53_vpc_association_authorization");
  }
}
