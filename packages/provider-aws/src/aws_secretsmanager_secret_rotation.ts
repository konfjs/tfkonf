import { TerraformConfig, TerraformResource } from "tfs";
export interface RotationRules {
  automatically_after_days?: number;
  duration?: string;
  schedule_expression?: string;
}
export interface AwsSecretsmanagerSecretRotationArgs {
  rotate_immediately?: boolean;
  rotation_lambda_arn?: string;
  secret_id: string;
  rotation_rules: RotationRules;
}
export class aws_secretsmanager_secret_rotation extends TerraformResource {
  readonly id?: string;
  readonly rotation_enabled!: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecretsmanagerSecretRotationArgs) {
    super(config, "resource", args, resourceName, "aws_secretsmanager_secret_rotation");
  }
}