import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsApprunnerConnectionArgs {
  connection_name: string;
  provider_type: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_apprunner_connection extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsApprunnerConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_apprunner_connection");
  }
}