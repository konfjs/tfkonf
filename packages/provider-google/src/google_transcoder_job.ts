import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleTranscoderJobArgsConfigAdBreaks {}
export interface GoogleTranscoderJobArgsConfigEditList {}
export interface GoogleTranscoderJobArgsConfigElementaryStreamsAudioStream {
  bitrate_bps: number;
}
export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Hlg {}
export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Sdr {}
export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264 {
  bitrate_bps: number;
  frame_rate: number;
  hlg: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Hlg;
  sdr: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264Sdr;
}
export interface GoogleTranscoderJobArgsConfigElementaryStreamsVideoStream {
  h264: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStreamH264;
}
export interface GoogleTranscoderJobArgsConfigElementaryStreams {
  audio_stream: GoogleTranscoderJobArgsConfigElementaryStreamsAudioStream;
  video_stream: GoogleTranscoderJobArgsConfigElementaryStreamsVideoStream;
}
export interface GoogleTranscoderJobArgsConfigEncryptionsAes128 {}
export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsClearkey {}
export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsFairplay {}
export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsPlayready {}
export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsWidevine {}
export interface GoogleTranscoderJobArgsConfigEncryptionsDrmSystems {
  clearkey: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsClearkey;
  fairplay: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsFairplay;
  playready: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsPlayready;
  widevine: GoogleTranscoderJobArgsConfigEncryptionsDrmSystemsWidevine;
}
export interface GoogleTranscoderJobArgsConfigEncryptionsMpegCenc {
  scheme: string;
}
export interface GoogleTranscoderJobArgsConfigEncryptionsSampleAes {}
export interface GoogleTranscoderJobArgsConfigEncryptionsSecretManagerKeySource {
  secret_version: string;
}
export interface GoogleTranscoderJobArgsConfigEncryptions {
  id: string;
  aes128: GoogleTranscoderJobArgsConfigEncryptionsAes128;
  drm_systems: GoogleTranscoderJobArgsConfigEncryptionsDrmSystems;
  mpeg_cenc: GoogleTranscoderJobArgsConfigEncryptionsMpegCenc;
  sample_aes: GoogleTranscoderJobArgsConfigEncryptionsSampleAes;
  secret_manager_key_source: GoogleTranscoderJobArgsConfigEncryptionsSecretManagerKeySource;
}
export interface GoogleTranscoderJobArgsConfigInputs {}
export interface GoogleTranscoderJobArgsConfigManifests {}
export interface GoogleTranscoderJobArgsConfigMuxStreamsSegmentSettings {}
export interface GoogleTranscoderJobArgsConfigMuxStreams {
  segment_settings: GoogleTranscoderJobArgsConfigMuxStreamsSegmentSettings;
}
export interface GoogleTranscoderJobArgsConfigOutput {}
export interface GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFadeXy {}
export interface GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFade {
  fade_type: string;
  xy: GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFadeXy;
}
export interface GoogleTranscoderJobArgsConfigOverlaysAnimations {
  animation_fade: GoogleTranscoderJobArgsConfigOverlaysAnimationsAnimationFade;
}
export interface GoogleTranscoderJobArgsConfigOverlaysImage {
  uri: string;
}
export interface GoogleTranscoderJobArgsConfigOverlays {
  animations: GoogleTranscoderJobArgsConfigOverlaysAnimations;
  image: GoogleTranscoderJobArgsConfigOverlaysImage;
}
export interface GoogleTranscoderJobArgsConfigPubsubDestination {
  topic?: string;
}
export interface GoogleTranscoderJobArgsConfig {
  ad_breaks: GoogleTranscoderJobArgsConfigAdBreaks;
  edit_list: GoogleTranscoderJobArgsConfigEditList;
  elementary_streams: GoogleTranscoderJobArgsConfigElementaryStreams;
  encryptions: GoogleTranscoderJobArgsConfigEncryptions;
  inputs: GoogleTranscoderJobArgsConfigInputs;
  manifests: GoogleTranscoderJobArgsConfigManifests;
  mux_streams: GoogleTranscoderJobArgsConfigMuxStreams;
  output: GoogleTranscoderJobArgsConfigOutput;
  overlays: GoogleTranscoderJobArgsConfigOverlays;
  pubsub_destination: GoogleTranscoderJobArgsConfigPubsubDestination;
}
export interface GoogleTranscoderJobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTranscoderJobArgs {
  labels?: {
    [key: string]: string;
  };
  location: string;
  config: GoogleTranscoderJobArgsConfig;
  timeouts: GoogleTranscoderJobArgsTimeouts;
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