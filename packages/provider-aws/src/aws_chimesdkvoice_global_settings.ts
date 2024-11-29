import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsChimesdkvoiceGlobalSettingsArgsVoiceConnector {
  cdr_bucket?: string;
}
export interface AwsChimesdkvoiceGlobalSettingsArgs {
  voice_connector: AwsChimesdkvoiceGlobalSettingsArgsVoiceConnector;
}
export class aws_chimesdkvoice_global_settings extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimesdkvoiceGlobalSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_chimesdkvoice_global_settings");
  }
}