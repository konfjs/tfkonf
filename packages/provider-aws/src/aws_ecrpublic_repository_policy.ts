import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEcrpublicRepositoryPolicyArgs {
  policy: string;
  repository_name: string;
}
export class aws_ecrpublic_repository_policy extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrpublicRepositoryPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_ecrpublic_repository_policy");
  }
}