import { TerraformConfig, TerraformResource } from "tfs";
export interface PostCallAnalyticsSettings {
  content_redaction_output?: string;
  data_access_role_arn: string;
  output_encryption_kms_key_id?: string;
  output_location: string;
}
export interface AmazonTranscribeCallAnalyticsProcessorConfiguration {
  call_analytics_stream_categories?: string[];
  content_identification_type?: string;
  content_redaction_type?: string;
  enable_partial_results_stabilization?: boolean;
  filter_partial_results?: boolean;
  language_code: string;
  language_model_name?: string;
  partial_results_stability?: string;
  pii_entity_types?: string;
  vocabulary_filter_method?: string;
  vocabulary_filter_name?: string;
  vocabulary_name?: string;
  post_call_analytics_settings: PostCallAnalyticsSettings;
}
export interface AmazonTranscribeProcessorConfiguration {
  content_identification_type?: string;
  content_redaction_type?: string;
  enable_partial_results_stabilization?: boolean;
  filter_partial_results?: boolean;
  language_code: string;
  language_model_name?: string;
  partial_results_stability?: string;
  pii_entity_types?: string;
  show_speaker_label?: boolean;
  vocabulary_filter_method?: string;
  vocabulary_filter_name?: string;
  vocabulary_name?: string;
}
export interface KinesisDataStreamSinkConfiguration {
  insights_target: string;
}
export interface LambdaFunctionSinkConfiguration {
  insights_target: string;
}
export interface S3RecordingSinkConfiguration {
  destination?: string;
}
export interface SnsTopicSinkConfiguration {
  insights_target: string;
}
export interface SqsQueueSinkConfiguration {
  insights_target: string;
}
export interface VoiceAnalyticsProcessorConfiguration {
  speaker_search_status: string;
  voice_tone_analysis_status: string;
}
export interface Elements {
  type: string;
  amazon_transcribe_call_analytics_processor_configuration: AmazonTranscribeCallAnalyticsProcessorConfiguration;
  amazon_transcribe_processor_configuration: AmazonTranscribeProcessorConfiguration;
  kinesis_data_stream_sink_configuration: KinesisDataStreamSinkConfiguration;
  lambda_function_sink_configuration: LambdaFunctionSinkConfiguration;
  s3_recording_sink_configuration: S3RecordingSinkConfiguration;
  sns_topic_sink_configuration: SnsTopicSinkConfiguration;
  sqs_queue_sink_configuration: SqsQueueSinkConfiguration;
  voice_analytics_processor_configuration: VoiceAnalyticsProcessorConfiguration;
}
export interface IssueDetectionConfiguration {
  rule_name: string;
}
export interface KeywordMatchConfiguration {
  keywords: string[];
  rule_name: string;
}
export interface SentimentConfiguration {
  rule_name: string;
  sentiment_type: string;
  time_period: number;
}
export interface Rules {
  type: string;
  issue_detection_configuration: IssueDetectionConfiguration;
  keyword_match_configuration: KeywordMatchConfiguration;
  sentiment_configuration: SentimentConfiguration;
}
export interface RealTimeAlertConfiguration {
  rules: Rules;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgs {
  name: string;
  resource_access_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  elements: Elements;
  real_time_alert_configuration: RealTimeAlertConfiguration;
  timeouts: Timeouts;
}
export class aws_chimesdkmediapipelines_media_insights_pipeline_configuration extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_chimesdkmediapipelines_media_insights_pipeline_configuration");
  }
}