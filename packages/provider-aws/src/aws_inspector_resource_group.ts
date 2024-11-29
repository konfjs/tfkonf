import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsInspectorResourceGroupArgs {
  tags: {
    [key: string]: string;
  };
}
export class aws_inspector_resource_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsInspectorResourceGroupArgs) {
    super(config, "resource", args, resourceName, "aws_inspector_resource_group");
  }
}