import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLbCookieStickinessPolicyArgs {
  cookie_expiration_period?: number;
  lb_port: number;
  load_balancer: string;
  name: string;
}

export class aws_lb_cookie_stickiness_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLbCookieStickinessPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_lb_cookie_stickiness_policy");
  }
}
