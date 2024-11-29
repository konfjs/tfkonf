import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimeVoiceConnectorTerminationCredentialsArgscredentials {
  password: string;
  username: string;
}
export interface AwsChimeVoiceConnectorTerminationCredentialsArgs {
  voice_connector_id: string;
  credentials: AwsChimeVoiceConnectorTerminationCredentialsArgscredentials;
}
export class aws_chime_voice_connector_termination_credentials extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorTerminationCredentialsArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_termination_credentials");
  }
}