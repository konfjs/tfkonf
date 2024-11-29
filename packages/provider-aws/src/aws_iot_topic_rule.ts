import { TerraformConfig, TerraformResource } from "@konfjs/core";
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
export interface AwsIotTopicRuleArgsDynamodb {
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
export interface AwsIotTopicRuleArgsDynamodbv2PutItem {
  table_name: string;
}
export interface AwsIotTopicRuleArgsDynamodbv2 {
  role_arn: string;
  put_item: AwsIotTopicRuleArgsDynamodbv2PutItem;
}
export interface AwsIotTopicRuleArgsElasticsearch {
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
export interface AwsIotTopicRuleArgsErrorActionDynamodb {
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
export interface AwsIotTopicRuleArgsErrorActionDynamodbv2PutItem {
  table_name: string;
}
export interface AwsIotTopicRuleArgsErrorActionDynamodbv2 {
  role_arn: string;
  put_item: AwsIotTopicRuleArgsErrorActionDynamodbv2PutItem;
}
export interface AwsIotTopicRuleArgsErrorActionElasticsearch {
  endpoint: string;
  id: string;
  index: string;
  role_arn: string;
  type: string;
}
export interface AwsIotTopicRuleArgsErrorActionFirehose {
  batch_mode?: boolean;
  delivery_stream_name: string;
  role_arn: string;
  separator?: string;
}
export interface AwsIotTopicRuleArgsErrorActionHttpHttpHeader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActionHttp {
  confirmation_url?: string;
  url: string;
  http_header: AwsIotTopicRuleArgsErrorActionHttpHttpHeader;
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
export interface AwsIotTopicRuleArgsErrorActionKafkaHeader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActionKafka {
  client_properties: {
    [key: string]: string;
  };
  destination_arn: string;
  key?: string;
  partition?: string;
  topic: string;
  header: AwsIotTopicRuleArgsErrorActionKafkaHeader;
}
export interface AwsIotTopicRuleArgsErrorActionKinesis {
  partition_key?: string;
  role_arn: string;
  stream_name: string;
}
export interface AwsIotTopicRuleArgsErrorActionLambda {
  function_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionRepublish {
  qos?: number;
  role_arn: string;
  topic: string;
}
export interface AwsIotTopicRuleArgsErrorActionS3 {
  bucket_name: string;
  canned_acl?: string;
  key: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionSns {
  message_format?: string;
  role_arn: string;
  target_arn: string;
}
export interface AwsIotTopicRuleArgsErrorActionSqs {
  queue_url: string;
  role_arn: string;
  use_base64: boolean;
}
export interface AwsIotTopicRuleArgsErrorActionStepFunctions {
  execution_name_prefix?: string;
  role_arn: string;
  state_machine_name: string;
}
export interface AwsIotTopicRuleArgsErrorActionTimestreamDimension {
  name: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActionTimestreamTimestamp {
  unit: string;
  value: string;
}
export interface AwsIotTopicRuleArgsErrorActionTimestream {
  database_name: string;
  role_arn: string;
  table_name: string;
  dimension: AwsIotTopicRuleArgsErrorActionTimestreamDimension;
  timestamp: AwsIotTopicRuleArgsErrorActionTimestreamTimestamp;
}
export interface AwsIotTopicRuleArgsErrorAction {
  cloudwatch_alarm: AwsIotTopicRuleArgsErrorActionCloudwatchAlarm;
  cloudwatch_logs: AwsIotTopicRuleArgsErrorActionCloudwatchLogs;
  cloudwatch_metric: AwsIotTopicRuleArgsErrorActionCloudwatchMetric;
  dynamodb: AwsIotTopicRuleArgsErrorActionDynamodb;
  dynamodbv2: AwsIotTopicRuleArgsErrorActionDynamodbv2;
  elasticsearch: AwsIotTopicRuleArgsErrorActionElasticsearch;
  firehose: AwsIotTopicRuleArgsErrorActionFirehose;
  http: AwsIotTopicRuleArgsErrorActionHttp;
  iot_analytics: AwsIotTopicRuleArgsErrorActionIotAnalytics;
  iot_events: AwsIotTopicRuleArgsErrorActionIotEvents;
  kafka: AwsIotTopicRuleArgsErrorActionKafka;
  kinesis: AwsIotTopicRuleArgsErrorActionKinesis;
  lambda: AwsIotTopicRuleArgsErrorActionLambda;
  republish: AwsIotTopicRuleArgsErrorActionRepublish;
  s3: AwsIotTopicRuleArgsErrorActionS3;
  sns: AwsIotTopicRuleArgsErrorActionSns;
  sqs: AwsIotTopicRuleArgsErrorActionSqs;
  step_functions: AwsIotTopicRuleArgsErrorActionStepFunctions;
  timestream: AwsIotTopicRuleArgsErrorActionTimestream;
}
export interface AwsIotTopicRuleArgsFirehose {
  batch_mode?: boolean;
  delivery_stream_name: string;
  role_arn: string;
  separator?: string;
}
export interface AwsIotTopicRuleArgsHttpHttpHeader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgsHttp {
  confirmation_url?: string;
  url: string;
  http_header: AwsIotTopicRuleArgsHttpHttpHeader;
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
export interface AwsIotTopicRuleArgsKafkaHeader {
  key: string;
  value: string;
}
export interface AwsIotTopicRuleArgsKafka {
  client_properties: {
    [key: string]: string;
  };
  destination_arn: string;
  key?: string;
  partition?: string;
  topic: string;
  header: AwsIotTopicRuleArgsKafkaHeader;
}
export interface AwsIotTopicRuleArgsKinesis {
  partition_key?: string;
  role_arn: string;
  stream_name: string;
}
export interface AwsIotTopicRuleArgsLambda {
  function_arn: string;
}
export interface AwsIotTopicRuleArgsRepublish {
  qos?: number;
  role_arn: string;
  topic: string;
}
export interface AwsIotTopicRuleArgsS3 {
  bucket_name: string;
  canned_acl?: string;
  key: string;
  role_arn: string;
}
export interface AwsIotTopicRuleArgsSns {
  message_format?: string;
  role_arn: string;
  target_arn: string;
}
export interface AwsIotTopicRuleArgsSqs {
  queue_url: string;
  role_arn: string;
  use_base64: boolean;
}
export interface AwsIotTopicRuleArgsStepFunctions {
  execution_name_prefix?: string;
  role_arn: string;
  state_machine_name: string;
}
export interface AwsIotTopicRuleArgsTimestreamDimension {
  name: string;
  value: string;
}
export interface AwsIotTopicRuleArgsTimestreamTimestamp {
  unit: string;
  value: string;
}
export interface AwsIotTopicRuleArgsTimestream {
  database_name: string;
  role_arn: string;
  table_name: string;
  dimension: AwsIotTopicRuleArgsTimestreamDimension;
  timestamp: AwsIotTopicRuleArgsTimestreamTimestamp;
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
  dynamodb: AwsIotTopicRuleArgsDynamodb;
  dynamodbv2: AwsIotTopicRuleArgsDynamodbv2;
  elasticsearch: AwsIotTopicRuleArgsElasticsearch;
  error_action: AwsIotTopicRuleArgsErrorAction;
  firehose: AwsIotTopicRuleArgsFirehose;
  http: AwsIotTopicRuleArgsHttp;
  iot_analytics: AwsIotTopicRuleArgsIotAnalytics;
  iot_events: AwsIotTopicRuleArgsIotEvents;
  kafka: AwsIotTopicRuleArgsKafka;
  kinesis: AwsIotTopicRuleArgsKinesis;
  lambda: AwsIotTopicRuleArgsLambda;
  republish: AwsIotTopicRuleArgsRepublish;
  s3: AwsIotTopicRuleArgsS3;
  sns: AwsIotTopicRuleArgsSns;
  sqs: AwsIotTopicRuleArgsSqs;
  step_functions: AwsIotTopicRuleArgsStepFunctions;
  timestream: AwsIotTopicRuleArgsTimestream;
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