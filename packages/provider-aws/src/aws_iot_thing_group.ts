import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotThingGroupArgsPropertiesAttributePayload {
  attributes?: {
    [key: string]: string;
  };
}
export interface AwsIotThingGroupArgsProperties {
  description?: string;
  attribute_payload: AwsIotThingGroupArgsPropertiesAttributePayload;
}
export interface AwsIotThingGroupArgs {
  name: string;
  parent_group_name?: string;
  tags?: {
    [key: string]: string;
  };
  properties: AwsIotThingGroupArgsProperties;
}
export class aws_iot_thing_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly metadata!: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotThingGroupArgs) {
    super(config, "resource", args, resourceName, "aws_iot_thing_group");
  }
}