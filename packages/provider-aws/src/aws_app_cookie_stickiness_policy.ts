import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppCookieStickinessPolicyArgs {
  cookie_name: string;
  lb_port: number;
  load_balancer: string;
  name: string;
}

export class aws_app_cookie_stickiness_policy extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAppCookieStickinessPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_app_cookie_stickiness_policy");
  }
}
