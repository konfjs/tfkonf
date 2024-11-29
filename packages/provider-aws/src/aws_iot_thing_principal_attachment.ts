import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIotThingPrincipalAttachmentArgs {
  principal: string;
  thing: string;
}
export class aws_iot_thing_principal_attachment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotThingPrincipalAttachmentArgs) {
    super(config, "resource", args, resourceName, "aws_iot_thing_principal_attachment");
  }
}