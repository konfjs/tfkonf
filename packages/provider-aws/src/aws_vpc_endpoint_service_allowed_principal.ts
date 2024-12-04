import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointServiceAllowedPrincipalArgs {
  principal_arn: string;
  vpc_endpoint_service_id: string;
}

export class aws_vpc_endpoint_service_allowed_principal extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointServiceAllowedPrincipalArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_service_allowed_principal");
  }
}
