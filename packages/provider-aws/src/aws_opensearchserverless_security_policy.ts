import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpensearchserverlessSecurityPolicyArgs {
  description?: string;
  name: string;
  policy: string;
  type: string;
}
export class aws_opensearchserverless_security_policy extends TerraformResource {
  readonly id!: string;
  readonly policy_version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpensearchserverlessSecurityPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_opensearchserverless_security_policy");
  }
}