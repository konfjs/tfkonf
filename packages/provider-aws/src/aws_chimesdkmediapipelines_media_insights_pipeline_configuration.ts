import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
  content_redaction_output?: string;
  data_access_role_arn: string;
  output_encryption_kms_key_id?: string;
  output_location: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsAmazonTranscribeCallAnalyticsProcessorConfiguration {
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
  post_call_analytics_settings: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsAmazonTranscribeProcessorConfiguration {
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
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsKinesisDataStreamSinkConfiguration {
  insights_target: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsLambdaFunctionSinkConfiguration {
  insights_target: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsS3RecordingSinkConfiguration {
  destination?: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsSnsTopicSinkConfiguration {
  insights_target: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsSqsQueueSinkConfiguration {
  insights_target: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsVoiceAnalyticsProcessorConfiguration {
  speaker_search_status: string;
  voice_tone_analysis_status: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselements {
  type: string;
  amazon_transcribe_call_analytics_processor_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
  amazon_transcribe_processor_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsAmazonTranscribeProcessorConfiguration;
  kinesis_data_stream_sink_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsKinesisDataStreamSinkConfiguration;
  lambda_function_sink_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsLambdaFunctionSinkConfiguration;
  s3_recording_sink_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsS3RecordingSinkConfiguration;
  sns_topic_sink_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsSnsTopicSinkConfiguration;
  sqs_queue_sink_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsSqsQueueSinkConfiguration;
  voice_analytics_processor_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselementsVoiceAnalyticsProcessorConfiguration;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrulesIssueDetectionConfiguration {
  rule_name: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrulesKeywordMatchConfiguration {
  keywords: string[];
  rule_name: string;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrulesSentimentConfiguration {
  rule_name: string;
  sentiment_type: string;
  time_period: number;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrules {
  type: string;
  issue_detection_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrulesIssueDetectionConfiguration;
  keyword_match_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrulesKeywordMatchConfiguration;
  sentiment_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrulesSentimentConfiguration;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfiguration {
  rules: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfigurationrules;
}
export interface AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgstimeouts {
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
  elements: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgselements;
  real_time_alert_configuration: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgsRealTimeAlertConfiguration;
  timeouts: AwsChimesdkmediapipelinesMediaInsightsPipelineConfigurationArgstimeouts;
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