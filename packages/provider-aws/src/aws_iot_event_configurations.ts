import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIotEventConfigurationsArgs {
  event_configurations: {
    [key: string]: any;
  };
}
export class aws_iot_event_configurations extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotEventConfigurationsArgs) {
    super(config, "resource", args, resourceName, "aws_iot_event_configurations");
  }
}