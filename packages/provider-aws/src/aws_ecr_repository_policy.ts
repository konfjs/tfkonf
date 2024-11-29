import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEcrRepositoryPolicyArgs {
  policy: string;
  repository: string;
}
export class aws_ecr_repository_policy extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrRepositoryPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_repository_policy");
  }
}