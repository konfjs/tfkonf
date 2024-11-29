import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsIotTopicRuleArgsCloudwatchAlarm {
  alarm_name: string;
  role_arn: string;
  state_reason: string;
  state_value: string;
}
export interface AwsIotTopicRuleArgsCloudwatchLogs {
  batch_mode?: boolean;
  log_group_name: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsCloudwatchMetric {
  metric_name: string;
  metric_namespace: string;
  metric_timestamp?: string;
  metric_unit: string;
  metric_value: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsdynamodb {
  hash_key_field: string;
  hash_key_type?: string;
  hash_key_value: string;
  operation?: string;
  payload_field?: string;
  range_key_field?: string;
  range_key_type?: string;
  range_key_value?: string;
  role_arn: string;
  table_name: string;
}
export interface AwsIotTopicRuleArgsdynamodbv2PutItem {
  table_name: string;
}
export interface AwsIotTopicRuleArgsdynamodbv2 {
  role_arn: string;
  put_item: AwsIotTopicRuleArgsdynamodbv2PutItem;
}
export interface AwsIotTopicRuleArgselasticsearch {
  endpoint: string;
  id: string;
  index: string;
  role_arn: string;
  type: string;
}
export interface AwsIotTopicRuleArgsErrorActionCloudwatchAlarm {
  alarm_name: string;
  role_arn: string;
  state_reason: string;
  state_value: string;
}
export interface AwsIotTopicRuleArgsErrorActionCloudwatchLogs {
  batch_mode?: boolean;
  log_group_name: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionCloudwatchMetric {
  metric_name: string;
  metric_namespace: string;
  metric_timestamp?: string;
  metric_unit: string;
  metric_value: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActiondynamodb {
  hash_key_field: string;
  hash_key_type?: string;
  hash_key_value: string;
  operation?: string;
  payload_field?: string;
  range_key_field?: string;
  range_key_type?: string;
  range_key_value?: string;
  role_arn: string;
  table_name: string;
}
export interface AwsIotTopicRuleArgsErrorActiondynamodbv2PutItem {
  table_name: string;
}
export interface AwsIotTopicRuleArgsErrorActiondynamodbv2 {
  role_arn: string;
  put_item: AwsIotTopicRuleArgsErrorActiondynamodbv2PutItem;
}
export interface AwsIotTopicRuleArgsErrorActionelasticsearch {
  endpoint: string;
  id: string;
  index: string;
  role_arn: string;
  type: string;
}
export interface AwsIotTopicRuleArgsErrorActionfirehose {
  batch_mode?: boolean;
  delivery_stream_name: string;
  role_arn: string;
  separator?: string;
}
export interface AwsIotTopicRuleArgsErrorActionhttpHttpHeader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActionhttp {
  confirmation_url?: string;
  url: string;
  http_header: AwsIotTopicRuleArgsErrorActionhttpHttpHeader;
}
export interface AwsIotTopicRuleArgsErrorActionIotAnalytics {
  batch_mode?: boolean;
  channel_name: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionIotEvents {
  batch_mode?: boolean;
  input_name: string;
  message_id?: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionkafkaheader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActionkafka {
  client_properties: {
    [key: string]: string;
  };
  destination_arn: string;
  key?: string;
  partition?: string;
  topic: string;
  header: AwsIotTopicRuleArgsErrorActionkafkaheader;
}
export interface AwsIotTopicRuleArgsErrorActionkinesis {
  partition_key?: string;
  role_arn: string;
  stream_name: string;
}
export interface AwsIotTopicRuleArgsErrorActionlambda {
  function_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionrepublish {
  qos?: number;
  role_arn: string;
  topic: string;
}
export interface AwsIotTopicRuleArgsErrorActions3 {
  bucket_name: string;
  canned_acl?: string;
  key: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionsns {
  message_format?: string;
  role_arn: string;
  target_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionsqs {
  queue_url: string;
  role_arn: string;
  use_base64: boolean;
}
export interface AwsIotTopicRuleArgsErrorActionStepFunctions {
  execution_name_prefix?: string;
  role_arn: string;
  state_machine_name: string;
}
export interface AwsIotTopicRuleArgsErrorActiontimestreamdimension {
  name: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActiontimestreamtimestamp {
  unit: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActiontimestream {
  database_name: string;
  role_arn: string;
  table_name: string;
  dimension: AwsIotTopicRuleArgsErrorActiontimestreamdimension;
  timestamp: AwsIotTopicRuleArgsErrorActiontimestreamtimestamp;
}
export interface AwsIotTopicRuleArgsErrorAction {
  cloudwatch_alarm: AwsIotTopicRuleArgsErrorActionCloudwatchAlarm;
  cloudwatch_logs: AwsIotTopicRuleArgsErrorActionCloudwatchLogs;
  cloudwatch_metric: AwsIotTopicRuleArgsErrorActionCloudwatchMetric;
  dynamodb: AwsIotTopicRuleArgsErrorActiondynamodb;
  dynamodbv2: AwsIotTopicRuleArgsErrorActiondynamodbv2;
  elasticsearch: AwsIotTopicRuleArgsErrorActionelasticsearch;
  firehose: AwsIotTopicRuleArgsErrorActionfirehose;
  http: AwsIotTopicRuleArgsErrorActionhttp;
  iot_analytics: AwsIotTopicRuleArgsErrorActionIotAnalytics;
  iot_events: AwsIotTopicRuleArgsErrorActionIotEvents;
  kafka: AwsIotTopicRuleArgsErrorActionkafka;
  kinesis: AwsIotTopicRuleArgsErrorActionkinesis;
  lambda: AwsIotTopicRuleArgsErrorActionlambda;
  republish: AwsIotTopicRuleArgsErrorActionrepublish;
  s3: AwsIotTopicRuleArgsErrorActions3;
  sns: AwsIotTopicRuleArgsErrorActionsns;
  sqs: AwsIotTopicRuleArgsErrorActionsqs;
  step_functions: AwsIotTopicRuleArgsErrorActionStepFunctions;
  timestream: AwsIotTopicRuleArgsErrorActiontimestream;
}
export interface AwsIotTopicRuleArgsfirehose {
  batch_mode?: boolean;
  delivery_stream_name: string;
  role_arn: string;
  separator?: string;
}
export interface AwsIotTopicRuleArgshttpHttpHeader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgshttp {
  confirmation_url?: string;
  url: string;
  http_header: AwsIotTopicRuleArgshttpHttpHeader;
}
export interface AwsIotTopicRuleArgsIotAnalytics {
  batch_mode?: boolean;
  channel_name: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsIotEvents {
  batch_mode?: boolean;
  input_name: string;
  message_id?: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgskafkaheader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgskafka {
  client_properties: {
    [key: string]: string;
  };
  destination_arn: string;
  key?: string;
  partition?: string;
  topic: string;
  header: AwsIotTopicRuleArgskafkaheader;
}
export interface AwsIotTopicRuleArgskinesis {
  partition_key?: string;
  role_arn: string;
  stream_name: string;
}
export interface AwsIotTopicRuleArgslambda {
  function_arn: string;
}
export interface AwsIotTopicRuleArgsrepublish {
  qos?: number;
  role_arn: string;
  topic: string;
}
export interface AwsIotTopicRuleArgss3 {
  bucket_name: string;
  canned_acl?: string;
  key: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgssns {
  message_format?: string;
  role_arn: string;
  target_arn: string;
}
export interface AwsIotTopicRuleArgssqs {
  queue_url: string;
  role_arn: string;
  use_base64: boolean;
}
export interface AwsIotTopicRuleArgsStepFunctions {
  execution_name_prefix?: string;
  role_arn: string;
  state_machine_name: string;
}
export interface AwsIotTopicRuleArgstimestreamdimension {
  name: string;
  value: string;
}
export interface AwsIotTopicRuleArgstimestreamtimestamp {
  unit: string;
  value: string;
}
export interface AwsIotTopicRuleArgstimestream {
  database_name: string;
  role_arn: string;
  table_name: string;
  dimension: AwsIotTopicRuleArgstimestreamdimension;
  timestamp: AwsIotTopicRuleArgstimestreamtimestamp;
}
export interface AwsIotTopicRuleArgs {
  description?: string;
  enabled: boolean;
  name: string;
  sql: string;
  sql_version: string;
  tags?: {
    [key: string]: string;
  };
  cloudwatch_alarm: AwsIotTopicRuleArgsCloudwatchAlarm;
  cloudwatch_logs: AwsIotTopicRuleArgsCloudwatchLogs;
  cloudwatch_metric: AwsIotTopicRuleArgsCloudwatchMetric;
  dynamodb: AwsIotTopicRuleArgsdynamodb;
  dynamodbv2: AwsIotTopicRuleArgsdynamodbv2;
  elasticsearch: AwsIotTopicRuleArgselasticsearch;
  error_action: AwsIotTopicRuleArgsErrorAction;
  firehose: AwsIotTopicRuleArgsfirehose;
  http: AwsIotTopicRuleArgshttp;
  iot_analytics: AwsIotTopicRuleArgsIotAnalytics;
  iot_events: AwsIotTopicRuleArgsIotEvents;
  kafka: AwsIotTopicRuleArgskafka;
  kinesis: AwsIotTopicRuleArgskinesis;
  lambda: AwsIotTopicRuleArgslambda;
  republish: AwsIotTopicRuleArgsrepublish;
  s3: AwsIotTopicRuleArgss3;
  sns: AwsIotTopicRuleArgssns;
  sqs: AwsIotTopicRuleArgssqs;
  step_functions: AwsIotTopicRuleArgsStepFunctions;
  timestream: AwsIotTopicRuleArgstimestream;
}
export class aws_iot_topic_rule extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsIotTopicRuleArgs) {
    super(config, "resource", args, resourceName, "aws_iot_topic_rule");
  }
}