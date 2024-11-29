import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimeVoiceConnectorOriginationArgsroute {
  host: string;
  port?: number;
  priority: number;
  protocol: string;
  weight: number;
}
export interface AwsChimeVoiceConnectorOriginationArgs {
  disabled?: boolean;
  voice_connector_id: string;
  route: AwsChimeVoiceConnectorOriginationArgsroute;
}
export class aws_chime_voice_connector_origination extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorOriginationArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_origination");
  }
}