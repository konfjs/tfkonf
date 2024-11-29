import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimeVoiceConnectorTerminationArgs {
  calling_regions: string[];
  cidr_allow_list: string[];
  cps_limit?: number;
  default_phone_number?: string;
  disabled?: boolean;
  voice_connector_id: string;
}
export class aws_chime_voice_connector_termination extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorTerminationArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector_termination");
  }
}