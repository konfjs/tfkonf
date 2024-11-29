import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIotThingArgs {
  attributes?: {
    [key: string]: string;
  };
  name: string;
  thing_type_name?: string;
}
export class aws_iot_thing extends TerraformResource {
  readonly arn!: string;
  readonly default_client_id!: string;
  readonly id?: string;
  readonly version!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotThingArgs) {
    super(config, "resource", args, resourceName, "aws_iot_thing");
  }
}