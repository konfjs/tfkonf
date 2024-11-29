import { TerraformConfig, TerraformResource } from "tfs";
export interface CdiInputSpecification {
  resolution: string;
}
export interface MediaPackageSettings {
  channel_id: string;
}
export interface MultiplexSettings {
  multiplex_id: string;
  program_name: string;
}
export interface Settings {
  password_param?: string;
  stream_name?: string;
  url?: string;
  username?: string;
}
export interface Destinations {
  id: string;
  media_package_settings: MediaPackageSettings;
  multiplex_settings: MultiplexSettings;
  settings: Settings;
}
export interface AudioNormalizationSettings {}
export interface NielsenCbetSettings {
  cbet_check_digit_string: string;
  cbet_stepaside: string;
  csid: string;
}
export interface NielsenNaesIiNwSettings {
  check_digit_string: string;
  sid: number;
}
export interface NielsenWatermarksSettings {
  nielsen_cbet_settings: NielsenCbetSettings;
  nielsen_naes_ii_nw_settings: NielsenNaesIiNwSettings;
}
export interface AudioWatermarkSettings {
  nielsen_watermarks_settings: NielsenWatermarksSettings;
}
export interface AacSettings {}
export interface Ac3Settings {}
export interface Eac3AtmosSettings {}
export interface Eac3Settings {}
export interface Mp2Settings {}
export interface PassThroughSettings {}
export interface WavSettings {}
export interface CodecSettings {
  aac_settings: AacSettings;
  ac3_settings: Ac3Settings;
  eac3_atmos_settings: Eac3AtmosSettings;
  eac3_settings: Eac3Settings;
  mp2_settings: Mp2Settings;
  pass_through_settings: PassThroughSettings;
  wav_settings: WavSettings;
}
export interface InputChannelLevels {
  gain: number;
  input_channel: number;
}
export interface ChannelMappings {
  output_channel: number;
  input_channel_levels: InputChannelLevels;
}
export interface RemixSettings {
  channel_mappings: ChannelMappings;
}
export interface AudioDescriptions {
  audio_selector_name: string;
  name: string;
  audio_normalization_settings: AudioNormalizationSettings;
  audio_watermark_settings: AudioWatermarkSettings;
  codec_settings: CodecSettings;
  remix_settings: RemixSettings;
}
export interface AvailBlankingImage {
  uri: string;
}
export interface AvailBlanking {
  avail_blanking_image: AvailBlankingImage;
}
export interface AribDestinationSettings {}
export interface Font {
  uri: string;
}
export interface BurnInDestinationSettings {
  alignment?: string;
  background_color?: string;
  background_opacity?: number;
  font_color?: string;
  font_opacity?: number;
  font_resolution?: number;
  font_size?: string;
  outline_color: string;
  outline_size?: number;
  shadow_color?: string;
  shadow_opacity?: number;
  shadow_x_offset?: number;
  shadow_y_offset?: number;
  teletext_grid_control: string;
  x_position?: number;
  y_position?: number;
  font: Font;
}
export interface Font {
  uri: string;
}
export interface DvbSubDestinationSettings {
  alignment?: string;
  background_color?: string;
  background_opacity?: number;
  font_color?: string;
  font_opacity?: number;
  font_resolution?: number;
  outline_color?: string;
  outline_size?: number;
  shadow_color?: string;
  shadow_opacity?: number;
  shadow_x_offset?: number;
  shadow_y_offset?: number;
  teletext_grid_control?: string;
  x_position?: number;
  y_position?: number;
  font: Font;
}
export interface EbuTtDDestinationSettings {
  copyright_holder?: string;
  fill_line_gap?: string;
  font_family?: string;
}
export interface EmbeddedDestinationSettings {}
export interface EmbeddedPlusScte20DestinationSettings {}
export interface RtmpCaptionInfoDestinationSettings {}
export interface Scte20PlusEmbeddedDestinationSettings {}
export interface Scte27DestinationSettings {}
export interface SmpteTtDestinationSettings {}
export interface TeletextDestinationSettings {}
export interface TtmlDestinationSettings {
  style_control: string;
}
export interface WebvttDestinationSettings {
  style_control: string;
}
export interface DestinationSettings {
  arib_destination_settings: AribDestinationSettings;
  burn_in_destination_settings: BurnInDestinationSettings;
  dvb_sub_destination_settings: DvbSubDestinationSettings;
  ebu_tt_d_destination_settings: EbuTtDDestinationSettings;
  embedded_destination_settings: EmbeddedDestinationSettings;
  embedded_plus_scte20_destination_settings: EmbeddedPlusScte20DestinationSettings;
  rtmp_caption_info_destination_settings: RtmpCaptionInfoDestinationSettings;
  scte20_plus_embedded_destination_settings: Scte20PlusEmbeddedDestinationSettings;
  scte27_destination_settings: Scte27DestinationSettings;
  smpte_tt_destination_settings: SmpteTtDestinationSettings;
  teletext_destination_settings: TeletextDestinationSettings;
  ttml_destination_settings: TtmlDestinationSettings;
  webvtt_destination_settings: WebvttDestinationSettings;
}
export interface CaptionDescriptions {
  accessibility?: string;
  caption_selector_name: string;
  language_code?: string;
  language_description?: string;
  name: string;
  destination_settings: DestinationSettings;
}
export interface InputLossImageSlate {
  uri: string;
}
export interface InputLossBehavior {
  black_frame_msec?: number;
  input_loss_image_color?: string;
  input_loss_image_type?: string;
  repeat_frame_msec?: number;
  input_loss_image_slate: InputLossImageSlate;
}
export interface GlobalConfiguration {
  initial_audio_gain?: number;
  input_end_action?: string;
  output_locking_mode?: string;
  output_timing_source?: string;
  support_low_framerate_inputs?: string;
  input_loss_behavior: InputLossBehavior;
}
export interface HtmlMotionGraphicsSettings {}
export interface MotionGraphicsSettings {
  html_motion_graphics_settings: HtmlMotionGraphicsSettings;
}
export interface MotionGraphicsConfiguration {
  motion_graphics_insertion?: string;
  motion_graphics_settings: MotionGraphicsSettings;
}
export interface NielsenConfiguration {
  distributor_id?: string;
  nielsen_pcm_to_id3_tagging?: string;
}
export interface ArchiveS3Settings {
  canned_acl?: string;
}
export interface ArchiveCdnSettings {
  archive_s3_settings: ArchiveS3Settings;
}
export interface Destination {
  destination_ref_id: string;
}
export interface ArchiveGroupSettings {
  rollover_interval?: number;
  archive_cdn_settings: ArchiveCdnSettings;
  destination: Destination;
}
export interface Destination {
  destination_ref_id: string;
}
export interface FrameCaptureS3Settings {
  canned_acl?: string;
}
export interface FrameCaptureCdnSettings {
  frame_capture_s3_settings: FrameCaptureS3Settings;
}
export interface FrameCaptureGroupSettings {
  destination: Destination;
  frame_capture_cdn_settings: FrameCaptureCdnSettings;
}
export interface CaptionLanguageMappings {
  caption_channel: number;
  language_code: string;
  language_description: string;
}
export interface Destination {
  destination_ref_id: string;
}
export interface HlsAkamaiSettings {
  connection_retry_interval?: number;
  filecache_duration?: number;
  num_retries?: number;
  restart_delay?: number;
}
export interface HlsBasicPutSettings {
  connection_retry_interval?: number;
  filecache_duration?: number;
  num_retries?: number;
  restart_delay?: number;
}
export interface HlsMediaStoreSettings {
  connection_retry_interval?: number;
  filecache_duration?: number;
  num_retries?: number;
  restart_delay?: number;
}
export interface HlsS3Settings {
  canned_acl?: string;
}
export interface HlsWebdavSettings {
  connection_retry_interval?: number;
  filecache_duration?: number;
  num_retries?: number;
  restart_delay?: number;
}
export interface HlsCdnSettings {
  hls_akamai_settings: HlsAkamaiSettings;
  hls_basic_put_settings: HlsBasicPutSettings;
  hls_media_store_settings: HlsMediaStoreSettings;
  hls_s3_settings: HlsS3Settings;
  hls_webdav_settings: HlsWebdavSettings;
}
export interface KeyProviderServer {
  uri: string;
}
export interface StaticKeySettings {
  static_key_value: string;
  key_provider_server: KeyProviderServer;
}
export interface KeyProviderSettings {
  static_key_settings: StaticKeySettings;
}
export interface HlsGroupSettings {
  caption_language_mappings: CaptionLanguageMappings;
  destination: Destination;
  hls_cdn_settings: HlsCdnSettings;
  key_provider_settings: KeyProviderSettings;
}
export interface Destination {
  destination_ref_id: string;
}
export interface MediaPackageGroupSettings {
  destination: Destination;
}
export interface Destination {
  destination_ref_id: string;
}
export interface MsSmoothGroupSettings {
  filecache_duration?: number;
  num_retries?: number;
  restart_delay?: number;
  destination: Destination;
}
export interface MultiplexGroupSettings {}
export interface RtmpGroupSettings {
  ad_markers?: string[];
  restart_delay?: number;
}
export interface UdpGroupSettings {}
export interface OutputGroupSettings {
  archive_group_settings: ArchiveGroupSettings;
  frame_capture_group_settings: FrameCaptureGroupSettings;
  hls_group_settings: HlsGroupSettings;
  media_package_group_settings: MediaPackageGroupSettings;
  ms_smooth_group_settings: MsSmoothGroupSettings;
  multiplex_group_settings: MultiplexGroupSettings;
  rtmp_group_settings: RtmpGroupSettings;
  udp_group_settings: UdpGroupSettings;
}
export interface DvbNitSettings {
  network_id: number;
  network_name: string;
  rep_interval?: number;
}
export interface DvbSdtSettings {
  output_sdt?: string;
  rep_interval?: number;
  service_name?: string;
  service_provider_name?: string;
}
export interface DvbTdtSettings {
  rep_interval?: number;
}
export interface M2tsSettings {
  arib?: string;
  arib_captions_pid_control?: string;
  audio_buffer_model?: string;
  audio_frames_per_pes?: number;
  audio_stream_type?: string;
  bitrate?: number;
  buffer_model?: string;
  cc_descriptor?: string;
  ebif?: string;
  ebp_audio_interval?: string;
  ebp_lookahead_ms?: number;
  ebp_placement?: string;
  ecm_pid?: string;
  es_rate_in_pes?: string;
  fragment_time?: number;
  klv?: string;
  nielsen_id3_behavior?: string;
  null_packet_bitrate?: number;
  pat_interval?: number;
  pcr_control?: string;
  pcr_period?: number;
  pcr_pid?: string;
  pmt_interval?: number;
  program_num?: number;
  rate_mode?: string;
  scte35_control?: string;
  segmentation_markers?: string;
  segmentation_style?: string;
  segmentation_time?: number;
  timed_metadata_behavior?: string;
  transport_stream_id?: number;
  dvb_nit_settings: DvbNitSettings;
  dvb_sdt_settings: DvbSdtSettings;
  dvb_tdt_settings: DvbTdtSettings;
}
export interface RawSettings {}
export interface ContainerSettings {
  m2ts_settings: M2tsSettings;
  raw_settings: RawSettings;
}
export interface ArchiveOutputSettings {
  extension?: string;
  name_modifier?: string;
  container_settings: ContainerSettings;
}
export interface FrameCaptureOutputSettings {}
export interface AudioOnlyImage {
  uri: string;
}
export interface AudioOnlyHlsSettings {
  audio_only_image: AudioOnlyImage;
}
export interface Fmp4HlsSettings {}
export interface FrameCaptureHlsSettings {}
export interface M3u8Settings {}
export interface StandardHlsSettings {
  m3u8_settings: M3u8Settings;
}
export interface HlsSettings {
  audio_only_hls_settings: AudioOnlyHlsSettings;
  fmp4_hls_settings: Fmp4HlsSettings;
  frame_capture_hls_settings: FrameCaptureHlsSettings;
  standard_hls_settings: StandardHlsSettings;
}
export interface HlsOutputSettings {
  hls_settings: HlsSettings;
}
export interface MediaPackageOutputSettings {}
export interface MsSmoothOutputSettings {}
export interface Destination {
  destination_ref_id: string;
}
export interface MultiplexOutputSettings {
  destination: Destination;
}
export interface Destination {
  destination_ref_id: string;
}
export interface RtmpOutputSettings {
  destination: Destination;
}
export interface DvbNitSettings {
  network_id: number;
  network_name: string;
  rep_interval?: number;
}
export interface DvbSdtSettings {
  output_sdt?: string;
  rep_interval?: number;
  service_name?: string;
  service_provider_name?: string;
}
export interface DvbTdtSettings {
  rep_interval?: number;
}
export interface M2tsSettings {
  arib?: string;
  arib_captions_pid_control?: string;
  audio_buffer_model?: string;
  audio_frames_per_pes?: number;
  audio_stream_type?: string;
  bitrate?: number;
  buffer_model?: string;
  cc_descriptor?: string;
  ebif?: string;
  ebp_audio_interval?: string;
  ebp_lookahead_ms?: number;
  ebp_placement?: string;
  ecm_pid?: string;
  es_rate_in_pes?: string;
  fragment_time?: number;
  klv?: string;
  nielsen_id3_behavior?: string;
  null_packet_bitrate?: number;
  pat_interval?: number;
  pcr_control?: string;
  pcr_period?: number;
  pcr_pid?: string;
  pmt_interval?: number;
  program_num?: number;
  rate_mode?: string;
  scte35_control?: string;
  segmentation_markers?: string;
  segmentation_style?: string;
  segmentation_time?: number;
  timed_metadata_behavior?: string;
  transport_stream_id?: number;
  dvb_nit_settings: DvbNitSettings;
  dvb_sdt_settings: DvbSdtSettings;
  dvb_tdt_settings: DvbTdtSettings;
}
export interface ContainerSettings {
  m2ts_settings: M2tsSettings;
}
export interface Destination {
  destination_ref_id: string;
}
export interface FecOutputSettings {}
export interface UdpOutputSettings {
  container_settings: ContainerSettings;
  destination: Destination;
  fec_output_settings: FecOutputSettings;
}
export interface OutputSettings {
  archive_output_settings: ArchiveOutputSettings;
  frame_capture_output_settings: FrameCaptureOutputSettings;
  hls_output_settings: HlsOutputSettings;
  media_package_output_settings: MediaPackageOutputSettings;
  ms_smooth_output_settings: MsSmoothOutputSettings;
  multiplex_output_settings: MultiplexOutputSettings;
  rtmp_output_settings: RtmpOutputSettings;
  udp_output_settings: UdpOutputSettings;
}
export interface Outputs {
  audio_description_names?: string[];
  output_name?: string;
  video_description_name?: string;
  output_settings: OutputSettings;
}
export interface OutputGroups {
  name?: string;
  output_group_settings: OutputGroupSettings;
  outputs: Outputs;
}
export interface TimecodeConfig {
  source: string;
}
export interface FrameCaptureSettings {}
export interface TemporalFilterSettings {
  post_filter_sharpening?: string;
  strength?: string;
}
export interface FilterSettings {
  temporal_filter_settings: TemporalFilterSettings;
}
export interface H264Settings {
  filter_settings: FilterSettings;
}
export interface ColorSpacePassthroughSettings {}
export interface DolbyVision81Settings {}
export interface Hdr10Settings {
  max_cll?: number;
  max_fall?: number;
}
export interface Rec601Settings {}
export interface Rec709Settings {}
export interface ColorSpaceSettings {
  color_space_passthrough_settings: ColorSpacePassthroughSettings;
  dolby_vision81_settings: DolbyVision81Settings;
  hdr10_settings: Hdr10Settings;
  rec601_settings: Rec601Settings;
  rec709_settings: Rec709Settings;
}
export interface TemporalFilterSettings {
  post_filter_sharpening?: string;
  strength?: string;
}
export interface FilterSettings {
  temporal_filter_settings: TemporalFilterSettings;
}
export interface TimecodeBurninSettings {}
export interface H265Settings {
  bitrate: number;
  buf_size?: number;
  framerate_denominator: number;
  framerate_numerator: number;
  gop_closed_cadence?: number;
  gop_size?: number;
  max_bitrate?: number;
  min_i_interval?: number;
  min_qp?: number;
  par_denominator?: number;
  par_numerator?: number;
  qvbr_quality_level?: number;
  slices?: number;
  tile_height?: number;
  tile_width?: number;
  color_space_settings: ColorSpaceSettings;
  filter_settings: FilterSettings;
  timecode_burnin_settings: TimecodeBurninSettings;
}
export interface CodecSettings {
  frame_capture_settings: FrameCaptureSettings;
  h264_settings: H264Settings;
  h265_settings: H265Settings;
}
export interface VideoDescriptions {
  name: string;
  codec_settings: CodecSettings;
}
export interface EncoderSettings {
  audio_descriptions: AudioDescriptions;
  avail_blanking: AvailBlanking;
  caption_descriptions: CaptionDescriptions;
  global_configuration: GlobalConfiguration;
  motion_graphics_configuration: MotionGraphicsConfiguration;
  nielsen_configuration: NielsenConfiguration;
  output_groups: OutputGroups;
  timecode_config: TimecodeConfig;
  video_descriptions: VideoDescriptions;
}
export interface AudioSilenceSettings {
  audio_selector_name: string;
  audio_silence_threshold_msec?: number;
}
export interface InputLossSettings {
  input_loss_threshold_msec?: number;
}
export interface VideoBlackSettings {
  black_detect_threshold?: number;
  video_black_threshold_msec?: number;
}
export interface FailoverConditionSettings {
  audio_silence_settings: AudioSilenceSettings;
  input_loss_settings: InputLossSettings;
  video_black_settings: VideoBlackSettings;
}
export interface FailoverCondition {
  failover_condition_settings: FailoverConditionSettings;
}
export interface AutomaticInputFailoverSettings {
  error_clear_time_msec?: number;
  input_preference?: string;
  secondary_input_id: string;
  failover_condition: FailoverCondition;
}
export interface AudioHlsRenditionSelection {
  group_id: string;
  name: string;
}
export interface AudioLanguageSelection {
  language_code: string;
  language_selection_policy?: string;
}
export interface AudioPidSelection {
  pid: number;
}
export interface DolbyEDecode {
  program_selection: string;
}
export interface Tracks {
  track: number;
}
export interface AudioTrackSelection {
  dolby_e_decode: DolbyEDecode;
  tracks: Tracks;
}
export interface SelectorSettings {
  audio_hls_rendition_selection: AudioHlsRenditionSelection;
  audio_language_selection: AudioLanguageSelection;
  audio_pid_selection: AudioPidSelection;
  audio_track_selection: AudioTrackSelection;
}
export interface AudioSelector {
  name: string;
  selector_settings: SelectorSettings;
}
export interface AncillarySourceSettings {
  source_ancillary_channel_number?: number;
}
export interface AribSourceSettings {}
export interface DvbSubSourceSettings {
  ocr_language?: string;
  pid?: number;
}
export interface EmbeddedSourceSettings {
  convert_608_to_708?: string;
  scte20_detection?: string;
  source_608_channel_number?: number;
}
export interface Scte20SourceSettings {
  convert_608_to_708?: string;
  source_608_channel_number?: number;
}
export interface Scte27SourceSettings {
  ocr_language?: string;
  pid?: number;
}
export interface OutputRectangle {
  height: number;
  left_offset: number;
  top_offset: number;
  width: number;
}
export interface TeletextSourceSettings {
  page_number?: string;
  output_rectangle: OutputRectangle;
}
export interface SelectorSettings {
  ancillary_source_settings: AncillarySourceSettings;
  arib_source_settings: AribSourceSettings;
  dvb_sub_source_settings: DvbSubSourceSettings;
  embedded_source_settings: EmbeddedSourceSettings;
  scte20_source_settings: Scte20SourceSettings;
  scte27_source_settings: Scte27SourceSettings;
  teletext_source_settings: TeletextSourceSettings;
}
export interface CaptionSelector {
  language_code?: string;
  name: string;
  selector_settings: SelectorSettings;
}
export interface HlsInputSettings {
  bandwidth?: number;
  buffer_segments?: number;
  retries?: number;
  retry_interval?: number;
  scte35_source?: string;
}
export interface NetworkInputSettings {
  server_validation?: string;
  hls_input_settings: HlsInputSettings;
}
export interface VideoSelector {
  color_space?: string;
  color_space_usage?: string;
}
export interface InputSettings {
  deblock_filter?: string;
  denoise_filter?: string;
  filter_strength?: number;
  scte35_pid?: number;
  smpte2038_data_preference?: string;
  source_end_behavior?: string;
  audio_selector: AudioSelector;
  caption_selector: CaptionSelector;
  network_input_settings: NetworkInputSettings;
  video_selector: VideoSelector;
}
export interface InputAttachments {
  input_attachment_name: string;
  input_id: string;
  automatic_input_failover_settings: AutomaticInputFailoverSettings;
  input_settings: InputSettings;
}
export interface InputSpecification {
  codec: string;
  input_resolution: string;
  maximum_bitrate: string;
}
export interface Maintenance {
  maintenance_day: string;
  maintenance_start_time: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface Vpc {
  public_address_allocation_ids: string[];
  subnet_ids: string[];
}
export interface AwsMedialiveChannelArgs {
  channel_class: string;
  name: string;
  role_arn?: string;
  start_channel?: boolean;
  tags?: {
    [key: string]: string;
  };
  cdi_input_specification: CdiInputSpecification;
  destinations: Destinations;
  encoder_settings: EncoderSettings;
  input_attachments: InputAttachments;
  input_specification: InputSpecification;
  maintenance: Maintenance;
  timeouts: Timeouts;
  vpc: Vpc;
}
export class aws_medialive_channel extends TerraformResource {
  readonly arn!: string;
  readonly channel_id!: string;
  readonly id?: string;
  readonly log_level?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMedialiveChannelArgs) {
    super(config, "resource", args, resourceName, "aws_medialive_channel");
  }
}