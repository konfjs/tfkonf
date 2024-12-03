import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsChimeVoiceConnectorLoggingArgs {
  enable_media_metric_logs?: boolean;
  enable_sip_logs?: boolean;
  voice_connector_id: string;
}
export class aws_chime_voice_connector_logging extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorLoggingArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_logging");
  }
}