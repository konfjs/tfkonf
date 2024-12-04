import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayAccountArgs {
  reset_on_delete?: boolean;
}

export class aws_api_gateway_account extends TerraformResource {
  readonly api_key_version!: string;
  readonly cloudwatch_role_arn?: string;
  readonly features!: string[];
  readonly id!: string;
  readonly throttle_settings!: any[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsApiGatewayAccountArgs) {
    super(config, "resource", args, resourceName, "aws_api_gateway_account");
  }
}
