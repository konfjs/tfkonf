import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIotThingGroupMembershipArgs {
  override_dynamic_group?: boolean;
  thing_group_name: string;
  thing_name: string;
}
export class aws_iot_thing_group_membership extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotThingGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "aws_iot_thing_group_membership");
  }
}