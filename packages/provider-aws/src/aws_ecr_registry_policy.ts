import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEcrRegistryPolicyArgs {
  policy: string;
}
export class aws_ecr_registry_policy extends TerraformResource {
  readonly id?: string;
  readonly registry_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcrRegistryPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_ecr_registry_policy");
  }
}