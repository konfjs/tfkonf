import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSagemakerDeviceArgsDevice {
  description?: string;
  device_name: string;
  iot_thing_name?: string;
}
export interface AwsSagemakerDeviceArgs {
  device_fleet_name: string;
  device: AwsSagemakerDeviceArgsDevice;
}
export class aws_sagemaker_device extends TerraformResource {
  readonly agent_version!: string;
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerDeviceArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_device");
  }
}