import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSesv2DedicatedIpPoolArgs {
  pool_name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_sesv2_dedicated_ip_pool extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly scaling_mode?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2DedicatedIpPoolArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_dedicated_ip_pool");
  }
}