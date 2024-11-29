import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudwatchEventBusArgs {
  description?: string;
  event_source_name?: string;
  kms_key_identifier?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_cloudwatch_event_bus extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudwatchEventBusArgs) {
    super(config, "resource", args, resourceName, "aws_cloudwatch_event_bus");
  }
}