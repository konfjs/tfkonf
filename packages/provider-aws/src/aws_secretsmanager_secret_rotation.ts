import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecretsmanagerSecretRotationArgsRotationRules {
  automatically_after_days?: number;
  duration?: string;
  schedule_expression?: string;
}
export interface AwsSecretsmanagerSecretRotationArgs {
  rotate_immediately?: boolean;
  rotation_lambda_arn?: string;
  secret_id: string;
  rotation_rules: AwsSecretsmanagerSecretRotationArgsRotationRules;
}
export class aws_secretsmanager_secret_rotation extends TerraformResource {
  readonly id?: string;
  readonly rotation_enabled!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecretsmanagerSecretRotationArgs) {
    super(config, "resource", args, resourceName, "aws_secretsmanager_secret_rotation");
  }
}