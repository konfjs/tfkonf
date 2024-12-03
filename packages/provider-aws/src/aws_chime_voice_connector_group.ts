import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsChimeVoiceConnectorGroupArgsConnector {
  priority: number;
  voice_connector_id: string;
}
export interface AwsChimeVoiceConnectorGroupArgs {
  name: string;
  connector: AwsChimeVoiceConnectorGroupArgsConnector;
}
export class aws_chime_voice_connector_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorGroupArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_group");
  }
}