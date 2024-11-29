import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcrLifecyclePolicyArgs {
  policy: string;
  repository: string;
}
export class aws_ecr_lifecycle_policy extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrLifecyclePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_lifecycle_policy");
  }
}