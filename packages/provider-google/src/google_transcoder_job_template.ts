import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleTranscoderJobTemplateArgsconfigAdBreaks {}
export interface GoogleTranscoderJobTemplateArgsconfigEditList {}
export interface GoogleTranscoderJobTemplateArgsconfigElementaryStreamsAudioStream {
  bitrate_bps: number;
}
export interface GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStreamh264hlg {}
export interface GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStreamh264sdr {}
export interface GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStreamh264 {
  bitrate_bps: number;
  frame_rate: number;
  hlg: GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStreamh264hlg;
  sdr: GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStreamh264sdr;
}
export interface GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStream {
  h264: GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStreamh264;
}
export interface GoogleTranscoderJobTemplateArgsconfigElementaryStreams {
  audio_stream: GoogleTranscoderJobTemplateArgsconfigElementaryStreamsAudioStream;
  video_stream: GoogleTranscoderJobTemplateArgsconfigElementaryStreamsVideoStream;
}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsaes128 {}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemsclearkey {}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemsfairplay {}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemsplayready {}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemswidevine {}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystems {
  clearkey: GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemsclearkey;
  fairplay: GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemsfairplay;
  playready: GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemsplayready;
  widevine: GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystemswidevine;
}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsMpegCenc {
  scheme: string;
}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsSampleAes {}
export interface GoogleTranscoderJobTemplateArgsconfigencryptionsSecretManagerKeySource {
  secret_version: string;
}
export interface GoogleTranscoderJobTemplateArgsconfigencryptions {
  id: string;
  aes128: GoogleTranscoderJobTemplateArgsconfigencryptionsaes128;
  drm_systems: GoogleTranscoderJobTemplateArgsconfigencryptionsDrmSystems;
  mpeg_cenc: GoogleTranscoderJobTemplateArgsconfigencryptionsMpegCenc;
  sample_aes: GoogleTranscoderJobTemplateArgsconfigencryptionsSampleAes;
  secret_manager_key_source: GoogleTranscoderJobTemplateArgsconfigencryptionsSecretManagerKeySource;
}
export interface GoogleTranscoderJobTemplateArgsconfiginputs {}
export interface GoogleTranscoderJobTemplateArgsconfigmanifests {}
export interface GoogleTranscoderJobTemplateArgsconfigMuxStreamsSegmentSettings {}
export interface GoogleTranscoderJobTemplateArgsconfigMuxStreams {
  segment_settings: GoogleTranscoderJobTemplateArgsconfigMuxStreamsSegmentSettings;
}
export interface GoogleTranscoderJobTemplateArgsconfigoutput {}
export interface GoogleTranscoderJobTemplateArgsconfigoverlaysanimationsAnimationFadexy {}
export interface GoogleTranscoderJobTemplateArgsconfigoverlaysanimationsAnimationFade {
  fade_type: string;
  xy: GoogleTranscoderJobTemplateArgsconfigoverlaysanimationsAnimationFadexy;
}
export interface GoogleTranscoderJobTemplateArgsconfigoverlaysanimations {
  animation_fade: GoogleTranscoderJobTemplateArgsconfigoverlaysanimationsAnimationFade;
}
export interface GoogleTranscoderJobTemplateArgsconfigoverlaysimage {
  uri: string;
}
export interface GoogleTranscoderJobTemplateArgsconfigoverlays {
  animations: GoogleTranscoderJobTemplateArgsconfigoverlaysanimations;
  image: GoogleTranscoderJobTemplateArgsconfigoverlaysimage;
}
export interface GoogleTranscoderJobTemplateArgsconfigPubsubDestination {
  topic?: string;
}
export interface GoogleTranscoderJobTemplateArgsconfig {
  ad_breaks: GoogleTranscoderJobTemplateArgsconfigAdBreaks;
  edit_list: GoogleTranscoderJobTemplateArgsconfigEditList;
  elementary_streams: GoogleTranscoderJobTemplateArgsconfigElementaryStreams;
  encryptions: GoogleTranscoderJobTemplateArgsconfigencryptions;
  inputs: GoogleTranscoderJobTemplateArgsconfiginputs;
  manifests: GoogleTranscoderJobTemplateArgsconfigmanifests;
  mux_streams: GoogleTranscoderJobTemplateArgsconfigMuxStreams;
  output: GoogleTranscoderJobTemplateArgsconfigoutput;
  overlays: GoogleTranscoderJobTemplateArgsconfigoverlays;
  pubsub_destination: GoogleTranscoderJobTemplateArgsconfigPubsubDestination;
}
export interface GoogleTranscoderJobTemplateArgstimeouts {
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
  config: GoogleTranscoderJobTemplateArgsconfig;
  timeouts: GoogleTranscoderJobTemplateArgstimeouts;
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