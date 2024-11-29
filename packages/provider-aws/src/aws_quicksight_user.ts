import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsQuicksightUserArgs {
  email: string;
  iam_arn?: string;
  identity_type: string;
  namespace?: string;
  session_name?: string;
  user_name?: string;
  user_role: string;
}
export class aws_quicksight_user extends TerraformResource {
  readonly arn!: string;
  readonly aws_account_id?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsQuicksightUserArgs) {
    super(config, "resource", args, resourceName, "aws_quicksight_user");
  }
}