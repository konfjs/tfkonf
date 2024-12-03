import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsElastictranscoderPresetArgsAudio {
  audio_packing_mode?: string;
  channels?: string;
  codec?: string;
  sample_rate?: string;
}
export interface AwsElastictranscoderPresetArgsAudioCodecOptions {}
export interface AwsElastictranscoderPresetArgsThumbnails {
  aspect_ratio?: string;
  format?: string;
  interval?: string;
  max_height?: string;
  max_width?: string;
  padding_policy?: string;
  resolution?: string;
  sizing_policy?: string;
}
export interface AwsElastictranscoderPresetArgsVideo {
  aspect_ratio?: string;
  codec?: string;
  display_aspect_ratio?: string;
  fixed_gop?: string;
  frame_rate?: string;
  keyframes_max_dist?: string;
  max_height?: string;
  max_width?: string;
  padding_policy?: string;
  resolution?: string;
  sizing_policy?: string;
}
export interface AwsElastictranscoderPresetArgsVideoWatermarks {
  horizontal_align?: string;
  horizontal_offset?: string;
  id?: string;
  max_height?: string;
  max_width?: string;
  opacity?: string;
  sizing_policy?: string;
  target?: string;
  vertical_align?: string;
  vertical_offset?: string;
}
export interface AwsElastictranscoderPresetArgs {
  container: string;
  description?: string;
  video_codec_options?: {
    [key: string]: string;
  };
  audio: AwsElastictranscoderPresetArgsAudio;
  audio_codec_options: AwsElastictranscoderPresetArgsAudioCodecOptions;
  thumbnails: AwsElastictranscoderPresetArgsThumbnails;
  video: AwsElastictranscoderPresetArgsVideo;
  video_watermarks: AwsElastictranscoderPresetArgsVideoWatermarks;
}
export class aws_elastictranscoder_preset extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsElastictranscoderPresetArgs) {
    super(config, "resource", args, resourceName, "aws_elastictranscoder_preset");
  }
}