import { TerraformConfig, TerraformResource } from "tfs";
export interface AdBreaks {}
export interface EditList {}
export interface AudioStream {
  bitrate_bps: number;
}
export interface Hlg {}
export interface Sdr {}
export interface H264 {
  bitrate_bps: number;
  frame_rate: number;
  hlg: Hlg;
  sdr: Sdr;
}
export interface VideoStream {
  h264: H264;
}
export interface ElementaryStreams {
  audio_stream: AudioStream;
  video_stream: VideoStream;
}
export interface Aes128 {}
export interface Clearkey {}
export interface Fairplay {}
export interface Playready {}
export interface Widevine {}
export interface DrmSystems {
  clearkey: Clearkey;
  fairplay: Fairplay;
  playready: Playready;
  widevine: Widevine;
}
export interface MpegCenc {
  scheme: string;
}
export interface SampleAes {}
export interface SecretManagerKeySource {
  secret_version: string;
}
export interface Encryptions {
  id: string;
  aes128: Aes128;
  drm_systems: DrmSystems;
  mpeg_cenc: MpegCenc;
  sample_aes: SampleAes;
  secret_manager_key_source: SecretManagerKeySource;
}
export interface Inputs {}
export interface Manifests {}
export interface SegmentSettings {}
export interface MuxStreams {
  segment_settings: SegmentSettings;
}
export interface Output {}
export interface Xy {}
export interface AnimationFade {
  fade_type: string;
  xy: Xy;
}
export interface Animations {
  animation_fade: AnimationFade;
}
export interface Image {
  uri: string;
}
export interface Overlays {
  animations: Animations;
  image: Image;
}
export interface PubsubDestination {
  topic?: string;
}
export interface Config {
  ad_breaks: AdBreaks;
  edit_list: EditList;
  elementary_streams: ElementaryStreams;
  encryptions: Encryptions;
  inputs: Inputs;
  manifests: Manifests;
  mux_streams: MuxStreams;
  output: Output;
  overlays: Overlays;
  pubsub_destination: PubsubDestination;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTranscoderJobArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  config: Config;
  timeouts: Timeouts;
}
export class google_transcoder_job extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly end_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly start_time!: string;
  readonly state!: string;
  readonly template_id?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTranscoderJobArgs) {
    super(config, "resource", args, resourceName, "google_transcoder_job");
  }
}