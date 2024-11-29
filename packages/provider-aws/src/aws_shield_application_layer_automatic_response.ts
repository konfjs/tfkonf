import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsShieldApplicationLayerAutomaticResponseArgs {
  action: string;
  resource_arn: string;
  timeouts: Timeouts;
}
export class aws_shield_application_layer_automatic_response extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsShieldApplicationLayerAutomaticResponseArgs) {
    super(config, "resource", args, resourceName, "aws_shield_application_layer_automatic_response");
  }
}