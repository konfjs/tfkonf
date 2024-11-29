import { TerraformConfig, TerraformResource } from "tfs";
export interface PortInfo {
  from_port: number;
  protocol: string;
  to_port: number;
}
export interface AwsLightsailInstancePublicPortsArgs {
  instance_name: string;
  port_info: PortInfo;
}
export class aws_lightsail_instance_public_ports extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLightsailInstancePublicPortsArgs) {
    super(config, "resource", args, resourceName, "aws_lightsail_instance_public_ports");
  }
}