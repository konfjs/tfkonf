import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsS3controlObjectLambdaAccessPointPolicyArgs {
  name: string;
  policy: string;
}
export class aws_s3control_object_lambda_access_point_policy extends TerraformResource {
  readonly account_id?: string;
  readonly has_public_access_policy!: boolean;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlObjectLambdaAccessPointPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_object_lambda_access_point_policy");
  }
}