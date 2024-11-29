import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTranscoderJobTemplateArgsConfigAdBreaks {}
export interface GoogleTranscoderJobTemplateArgsConfigEditList {}
export interface GoogleTranscoderJobTemplateArgsConfigElementaryStreamsAudioStream {
  bitrate_bps: number;
}
export interface GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStreamH264Hlg {}
export interface GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStreamH264Sdr {}
export interface GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStreamH264 {
  bitrate_bps: number;
  frame_rate: number;
  hlg: GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStreamH264Hlg;
  sdr: GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStreamH264Sdr;
}
export interface GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStream {
  h264: GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStreamH264;
}
export interface GoogleTranscoderJobTemplateArgsConfigElementaryStreams {
  audio_stream: GoogleTranscoderJobTemplateArgsConfigElementaryStreamsAudioStream;
  video_stream: GoogleTranscoderJobTemplateArgsConfigElementaryStreamsVideoStream;
}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsAes128 {}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsClearkey {}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsFairplay {}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsPlayready {}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsWidevine {}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystems {
  clearkey: GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsClearkey;
  fairplay: GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsFairplay;
  playready: GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsPlayready;
  widevine: GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystemsWidevine;
}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsMpegCenc {
  scheme: string;
}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsSampleAes {}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptionsSecretManagerKeySource {
  secret_version: string;
}
export interface GoogleTranscoderJobTemplateArgsConfigEncryptions {
  id: string;
  aes128: GoogleTranscoderJobTemplateArgsConfigEncryptionsAes128;
  drm_systems: GoogleTranscoderJobTemplateArgsConfigEncryptionsDrmSystems;
  mpeg_cenc: GoogleTranscoderJobTemplateArgsConfigEncryptionsMpegCenc;
  sample_aes: GoogleTranscoderJobTemplateArgsConfigEncryptionsSampleAes;
  secret_manager_key_source: GoogleTranscoderJobTemplateArgsConfigEncryptionsSecretManagerKeySource;
}
export interface GoogleTranscoderJobTemplateArgsConfigInputs {}
export interface GoogleTranscoderJobTemplateArgsConfigManifests {}
export interface GoogleTranscoderJobTemplateArgsConfigMuxStreamsSegmentSettings {}
export interface GoogleTranscoderJobTemplateArgsConfigMuxStreams {
  segment_settings: GoogleTranscoderJobTemplateArgsConfigMuxStreamsSegmentSettings;
}
export interface GoogleTranscoderJobTemplateArgsConfigOutput {}
export interface GoogleTranscoderJobTemplateArgsConfigOverlaysAnimationsAnimationFadeXy {}
export interface GoogleTranscoderJobTemplateArgsConfigOverlaysAnimationsAnimationFade {
  fade_type: string;
  xy: GoogleTranscoderJobTemplateArgsConfigOverlaysAnimationsAnimationFadeXy;
}
export interface GoogleTranscoderJobTemplateArgsConfigOverlaysAnimations {
  animation_fade: GoogleTranscoderJobTemplateArgsConfigOverlaysAnimationsAnimationFade;
}
export interface GoogleTranscoderJobTemplateArgsConfigOverlaysImage {
  uri: string;
}
export interface GoogleTranscoderJobTemplateArgsConfigOverlays {
  animations: GoogleTranscoderJobTemplateArgsConfigOverlaysAnimations;
  image: GoogleTranscoderJobTemplateArgsConfigOverlaysImage;
}
export interface GoogleTranscoderJobTemplateArgsConfigPubsubDestination {
  topic?: string;
}
export interface GoogleTranscoderJobTemplateArgsConfig {
  ad_breaks: GoogleTranscoderJobTemplateArgsConfigAdBreaks;
  edit_list: GoogleTranscoderJobTemplateArgsConfigEditList;
  elementary_streams: GoogleTranscoderJobTemplateArgsConfigElementaryStreams;
  encryptions: GoogleTranscoderJobTemplateArgsConfigEncryptions;
  inputs: GoogleTranscoderJobTemplateArgsConfigInputs;
  manifests: GoogleTranscoderJobTemplateArgsConfigManifests;
  mux_streams: GoogleTranscoderJobTemplateArgsConfigMuxStreams;
  output: GoogleTranscoderJobTemplateArgsConfigOutput;
  overlays: GoogleTranscoderJobTemplateArgsConfigOverlays;
  pubsub_destination: GoogleTranscoderJobTemplateArgsConfigPubsubDestination;
}
export interface GoogleTranscoderJobTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleTranscoderJobTemplateArgs {
  job_template_id: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  config: GoogleTranscoderJobTemplateArgsConfig;
  timeouts: GoogleTranscoderJobTemplateArgsTimeouts;
}
export class google_transcoder_job_template extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleTranscoderJobTemplateArgs) {
    super(config, "resource", args, resourceName, "google_transcoder_job_template");
  }
}