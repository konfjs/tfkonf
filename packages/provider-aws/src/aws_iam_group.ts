import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamGroupArgs {
  name: string;
  path?: string;
}
export class aws_iam_group extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly unique_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamGroupArgs) {
    super(config, "resource", args, resourceName, "aws_iam_group");
  }
}