import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIamUserArgs {
  force_destroy?: boolean;
  name: string;
  path?: string;
  permissions_boundary?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_iam_user extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly unique_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamUserArgs) {
    super(config, "resource", args, resourceName, "aws_iam_user");
  }
}