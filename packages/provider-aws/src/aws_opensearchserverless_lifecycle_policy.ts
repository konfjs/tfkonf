import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpensearchserverlessLifecyclePolicyArgs {
  description?: string;
  name: string;
  policy: string;
  type: string;
}
export class aws_opensearchserverless_lifecycle_policy extends TerraformResource {
  readonly id!: string;
  readonly policy_version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessLifecyclePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_opensearchserverless_lifecycle_policy");
  }
}