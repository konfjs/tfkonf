import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchserverlessAccessPolicyArgs {
  description?: string;
  name: string;
  policy: string;
  type: string;
}

export class aws_opensearchserverless_access_policy extends TerraformResource {
  readonly id!: string;
  readonly policy_version!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessAccessPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_opensearchserverless_access_policy");
  }
}
