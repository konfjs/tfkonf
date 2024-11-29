import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIvsPlaybackKeyPairArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsIvsPlaybackKeyPairArgs {
  public_key: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsIvsPlaybackKeyPairArgsTimeouts;
}
export class aws_ivs_playback_key_pair extends TerraformResource {
  readonly arn!: string;
  readonly fingerprint!: string;
  readonly id?: string;
  readonly name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIvsPlaybackKeyPairArgs) {
    super(config, "resource", args, resourceName, "aws_ivs_playback_key_pair");
  }
}