import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsLexv2modelsBotVersionArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsLexv2modelsBotVersionArgs {
  bot_id: string;
  description?: string;
  locale_specification: {
    [key: string]: any;
  };
  timeouts?: AwsLexv2modelsBotVersionArgsTimeouts;
}
export class aws_lexv2models_bot_version extends TerraformResource {
  readonly bot_version?: string;
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsBotVersionArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_bot_version");
  }
}