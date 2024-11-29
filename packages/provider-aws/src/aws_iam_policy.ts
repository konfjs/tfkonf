import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIamPolicyArgs {
  description?: string;
  path?: string;
  policy: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_iam_policy extends TerraformResource {
  readonly arn!: string;
  readonly attachment_count!: number;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly policy_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_iam_policy");
  }
}