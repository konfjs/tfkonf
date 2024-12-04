import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlacierVaultArgsNotification {
  events: string[];
  sns_topic: string;
}

export interface AwsGlacierVaultArgs {
  access_policy?: string;
  name: string;
  tags?: { [key: string]: string };
  notification: AwsGlacierVaultArgsNotification;
}

export class aws_glacier_vault extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly location!: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlacierVaultArgs) {
    super(config, "resource", args, resourceName, "aws_glacier_vault");
  }
}
