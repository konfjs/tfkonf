import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailStaticIpArgs {
  name: string;
}

export class aws_lightsail_static_ip extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly ip_address!: string;
  readonly support_code!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailStaticIpArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_static_ip");
  }
}
