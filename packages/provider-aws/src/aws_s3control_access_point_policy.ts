import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsS3controlAccessPointPolicyArgs {
  access_point_arn: string;
  policy: string;
}
export class aws_s3control_access_point_policy extends TerraformResource {
  readonly has_public_access_policy!: boolean;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlAccessPointPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_access_point_policy");
  }
}