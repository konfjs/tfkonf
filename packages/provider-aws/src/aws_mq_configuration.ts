import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMqConfigurationArgs {
  data: string;
  description?: string;
  engine_type: string;
  engine_version: string;
  name: string;
  tags?: { [key: string]: string };
}

export class aws_mq_configuration extends TerraformResource {
  readonly arn!: string;
  readonly authentication_strategy?: string;
  readonly id?: string;
  readonly latest_revision!: number;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsMqConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_mq_configuration");
  }
}
