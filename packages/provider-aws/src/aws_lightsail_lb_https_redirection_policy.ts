import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLightsailLbHttpsRedirectionPolicyArgs {
  enabled: boolean;
  lb_name: string;
}
export class aws_lightsail_lb_https_redirection_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailLbHttpsRedirectionPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_lb_https_redirection_policy");
  }
}