import { TerraformConfig, TerraformResource } from "tfs";
export interface VoiceConnector {
  cdr_bucket?: string;
}
export interface AwsChimesdkvoiceGlobalSettingsArgs {
  voice_connector: VoiceConnector;
}
export class aws_chimesdkvoice_global_settings extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimesdkvoiceGlobalSettingsArgs) {
    super(config, "resource", args, resourceName, "aws_chimesdkvoice_global_settings");
  }
}