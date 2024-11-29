import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcsTagArgs {
  key: string;
  resource_arn: string;
  value: string;
}
export class aws_ecs_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsTagArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_tag");
  }
}