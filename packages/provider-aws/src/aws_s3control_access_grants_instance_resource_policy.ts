import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsS3controlAccessGrantsInstanceResourcePolicyArgs {
  policy: string;
}
export class aws_s3control_access_grants_instance_resource_policy extends TerraformResource {
  readonly account_id?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantsInstanceResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_access_grants_instance_resource_policy");
  }
}