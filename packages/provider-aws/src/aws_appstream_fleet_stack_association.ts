import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppstreamFleetStackAssociationArgs {
  fleet_name: string;
  stack_name: string;
}
export class aws_appstream_fleet_stack_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamFleetStackAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_fleet_stack_association");
  }
}