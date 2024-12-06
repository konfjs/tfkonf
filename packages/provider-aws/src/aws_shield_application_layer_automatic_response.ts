import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsShieldApplicationLayerAutomaticResponseArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsShieldApplicationLayerAutomaticResponseArgs {
  action: string;
  resource_arn: string;
  timeouts?: AwsShieldApplicationLayerAutomaticResponseArgsTimeouts;
}

export class aws_shield_application_layer_automatic_response extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldApplicationLayerAutomaticResponseArgs) {
    super(config, "resource", args, resourceName, "aws_shield_application_layer_automatic_response");
  }
}
