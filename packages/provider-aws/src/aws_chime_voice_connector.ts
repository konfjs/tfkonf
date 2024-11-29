import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimeVoiceConnectorArgs {
  name: string;
  require_encryption: boolean;
  tags?: {
    [key: string]: string;
  };
}
export class aws_chime_voice_connector extends TerraformResource {
  readonly arn!: string;
  readonly aws_region?: string;
  readonly id?: string;
  readonly outbound_host_name!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimeVoiceConnectorArgs) {
    super(config, "resource", args, resourceName, "aws_chime_voice_connector");
  }
}