import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLightsailLbStickinessPolicyArgs {
  cookie_duration: number;
  enabled: boolean;
  lb_name: string;
}
export class aws_lightsail_lb_stickiness_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailLbStickinessPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_lb_stickiness_policy");
  }
}