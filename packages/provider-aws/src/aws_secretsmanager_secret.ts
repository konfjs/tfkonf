import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecretsmanagerSecretArgsReplica {
  region: string;
}

export interface AwsSecretsmanagerSecretArgs {
  description?: string;
  force_overwrite_replica_secret?: boolean;
  kms_key_id?: string;
  recovery_window_in_days?: number;
  tags?: { [key: string]: string };
  replica: AwsSecretsmanagerSecretArgsReplica;
}

export class aws_secretsmanager_secret extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly policy?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSecretsmanagerSecretArgs) {
    super(config, "resource", args, resourceName, "aws_secretsmanager_secret");
  }
}
