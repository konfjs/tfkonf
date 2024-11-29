import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpcEndpointServicePrivateDnsVerificationArgsTimeouts {
  create?: string;
}
export interface AwsVpcEndpointServicePrivateDnsVerificationArgs {
  service_id: string;
  wait_for_verification?: boolean;
  timeouts?: AwsVpcEndpointServicePrivateDnsVerificationArgsTimeouts;
}
export class aws_vpc_endpoint_service_private_dns_verification extends TerraformResource {
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpcEndpointServicePrivateDnsVerificationArgs) {
    super(config, "resource", args, resourceName, "aws_vpc_endpoint_service_private_dns_verification");
  }
}