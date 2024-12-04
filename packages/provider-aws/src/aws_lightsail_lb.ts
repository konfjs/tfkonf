import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailLbArgs {
  health_check_path?: string;
  instance_port: number;
  ip_address_type?: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_lb extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly dns_name!: string;
  readonly id?: string;
  readonly protocol!: string;
  readonly public_ports!: number[];
  readonly support_code!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailLbArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_lb");
  }
}
