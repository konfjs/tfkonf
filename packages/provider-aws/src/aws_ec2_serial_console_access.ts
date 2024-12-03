import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEc2SerialConsoleAccessArgs {
  enabled?: boolean;
}
export class aws_ec2_serial_console_access extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEc2SerialConsoleAccessArgs) {
    super(config, "resource", args, resourceName, "aws_ec2_serial_console_access");
  }
}