import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecretsmanagerSecretPolicyArgs {
  block_public_policy?: boolean;
  policy: string;
  secret_arn: string;
}
export class aws_secretsmanager_secret_policy extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecretsmanagerSecretPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_secretsmanager_secret_policy");
  }
}