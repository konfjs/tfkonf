import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLexv2modelsBotLocaleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLexv2modelsBotLocaleArgsVoiceSettings {
  voice_id: string;
}

export interface AwsLexv2modelsBotLocaleArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  locale_id: string;
  n_lu_intent_confidence_threshold: number;
  timeouts?: AwsLexv2modelsBotLocaleArgsTimeouts;
  voice_settings: AwsLexv2modelsBotLocaleArgsVoiceSettings;
}

export class aws_lexv2models_bot_locale extends TerraformResource {
  readonly id!: string;
  readonly name?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsBotLocaleArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_bot_locale");
  }
}
