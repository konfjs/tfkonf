import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecretsmanagerSecretVersionArgs {
  secret_binary?: string;
  secret_id: string;
  secret_string?: string;
}
export class aws_secretsmanager_secret_version extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly version_id!: string;
  readonly version_stages?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecretsmanagerSecretVersionArgs) {
    super(config, "resource", args, resourceName, "aws_secretsmanager_secret_version");
  }
}