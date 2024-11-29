import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTranscoderJobArgsconfigAdBreaks {}
export interface GoogleTranscoderJobArgsconfigEditList {}
export interface GoogleTranscoderJobArgsconfigElementaryStreamsAudioStream {
  bitrate_bps: number;
}
export interface GoogleTranscoderJobArgsconfigElementaryStreamsVideoStreamh264hlg {}
export interface GoogleTranscoderJobArgsconfigElementaryStreamsVideoStreamh264sdr {}
export interface GoogleTranscoderJobArgsconfigElementaryStreamsVideoStreamh264 {
  bitrate_bps: number;
  frame_rate: number;
  hlg: GoogleTranscoderJobArgsconfigElementaryStreamsVideoStreamh264hlg;
  sdr: GoogleTranscoderJobArgsconfigElementaryStreamsVideoStreamh264sdr;
}
export interface GoogleTranscoderJobArgsconfigElementaryStreamsVideoStream {
  h264: GoogleTranscoderJobArgsconfigElementaryStreamsVideoStreamh264;
}
export interface GoogleTranscoderJobArgsconfigElementaryStreams {
  audio_stream: GoogleTranscoderJobArgsconfigElementaryStreamsAudioStream;
  video_stream: GoogleTranscoderJobArgsconfigElementaryStreamsVideoStream;
}
export interface GoogleTranscoderJobArgsconfigencryptionsaes128 {}
export interface GoogleTranscoderJobArgsconfigencryptionsDrmSystemsclearkey {}
export interface GoogleTranscoderJobArgsconfigencryptionsDrmSystemsfairplay {}
export interface GoogleTranscoderJobArgsconfigencryptionsDrmSystemsplayready {}
export interface GoogleTranscoderJobArgsconfigencryptionsDrmSystemswidevine {}
export interface GoogleTranscoderJobArgsconfigencryptionsDrmSystems {
  clearkey: GoogleTranscoderJobArgsconfigencryptionsDrmSystemsclearkey;
  fairplay: GoogleTranscoderJobArgsconfigencryptionsDrmSystemsfairplay;
  playready: GoogleTranscoderJobArgsconfigencryptionsDrmSystemsplayready;
  widevine: GoogleTranscoderJobArgsconfigencryptionsDrmSystemswidevine;
}
export interface GoogleTranscoderJobArgsconfigencryptionsMpegCenc {
  scheme: string;
}
export interface GoogleTranscoderJobArgsconfigencryptionsSampleAes {}
export interface GoogleTranscoderJobArgsconfigencryptionsSecretManagerKeySource {
  secret_version: string;
}
export interface GoogleTranscoderJobArgsconfigencryptions {
  id: string;
  aes128: GoogleTranscoderJobArgsconfigencryptionsaes128;
  drm_systems: GoogleTranscoderJobArgsconfigencryptionsDrmSystems;
  mpeg_cenc: GoogleTranscoderJobArgsconfigencryptionsMpegCenc;
  sample_aes: GoogleTranscoderJobArgsconfigencryptionsSampleAes;
  secret_manager_key_source: GoogleTranscoderJobArgsconfigencryptionsSecretManagerKeySource;
}
export interface GoogleTranscoderJobArgsconfiginputs {}
export interface GoogleTranscoderJobArgsconfigmanifests {}
export interface GoogleTranscoderJobArgsconfigMuxStreamsSegmentSettings {}
export interface GoogleTranscoderJobArgsconfigMuxStreams {
  segment_settings: GoogleTranscoderJobArgsconfigMuxStreamsSegmentSettings;
}
export interface GoogleTranscoderJobArgsconfigoutput {}
export interface GoogleTranscoderJobArgsconfigoverlaysanimationsAnimationFadexy {}
export interface GoogleTranscoderJobArgsconfigoverlaysanimationsAnimationFade {
  fade_type: string;
  xy: GoogleTranscoderJobArgsconfigoverlaysanimationsAnimationFadexy;
}
export interface GoogleTranscoderJobArgsconfigoverlaysanimations {
  animation_fade: GoogleTranscoderJobArgsconfigoverlaysanimationsAnimationFade;
}
export interface GoogleTranscoderJobArgsconfigoverlaysimage {
  uri: string;
}
export interface GoogleTranscoderJobArgsconfigoverlays {
  animations: GoogleTranscoderJobArgsconfigoverlaysanimations;
  image: GoogleTranscoderJobArgsconfigoverlaysimage;
}
export interface GoogleTranscoderJobArgsconfigPubsubDestination {
  topic?: string;
}
export interface GoogleTranscoderJobArgsconfig {
  ad_breaks: GoogleTranscoderJobArgsconfigAdBreaks;
  edit_list: GoogleTranscoderJobArgsconfigEditList;
  elementary_streams: GoogleTranscoderJobArgsconfigElementaryStreams;
  encryptions: GoogleTranscoderJobArgsconfigencryptions;
  inputs: GoogleTranscoderJobArgsconfiginputs;
  manifests: GoogleTranscoderJobArgsconfigmanifests;
  mux_streams: GoogleTranscoderJobArgsconfigMuxStreams;
  output: GoogleTranscoderJobArgsconfigoutput;
  overlays: GoogleTranscoderJobArgsconfigoverlays;
  pubsub_destination: GoogleTranscoderJobArgsconfigPubsubDestination;
}
export interface GoogleTranscoderJobArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTranscoderJobArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  config: GoogleTranscoderJobArgsconfig;
  timeouts: GoogleTranscoderJobArgstimeouts;
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