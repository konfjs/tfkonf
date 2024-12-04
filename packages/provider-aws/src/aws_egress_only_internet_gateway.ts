import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEgressOnlyInternetGatewayArgs {
  tags?: { [key: string]: string };
  vpc_id: string;
}

export class aws_egress_only_internet_gateway extends TerraformResource {
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsEgressOnlyInternetGatewayArgs) {
    super(config, "resource", args, resourceName, "aws_egress_only_internet_gateway");
  }
}
