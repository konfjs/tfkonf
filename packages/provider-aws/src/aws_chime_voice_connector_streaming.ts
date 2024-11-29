import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimeVoiceConnectorStreamingArgsMediaInsightsConfiguration {
  configuration_arn?: string;
  disabled?: boolean;
}
export interface AwsChimeVoiceConnectorStreamingArgs {
  data_retention: number;
  disabled?: boolean;
  streaming_notification_targets?: string[];
  voice_connector_id: string;
  media_insights_configuration: AwsChimeVoiceConnectorStreamingArgsMediaInsightsConfiguration;
}
export class aws_chime_voice_connector_streaming extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorStreamingArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_streaming");
  }
}