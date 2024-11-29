import { TerraformConfig, TerraformResource } from "tfs";
export interface Properties {
  description?: string;
}
export interface AwsIotThingTypeArgs {
  deprecated?: boolean;
  name: string;
  tags?: {
    [key: string]: string;
  };
  properties: Properties;
}
export class aws_iot_thing_type extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotThingTypeArgs) {
    super(config, "resource", args, resourceName, "aws_iot_thing_type");
  }
}