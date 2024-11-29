import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudwatchAlarm {
  alarm_name: string;
  role_arn: string;
  state_reason: string;
  state_value: string;
}
export interface CloudwatchLogs {
  batch_mode?: boolean;
  log_group_name: string;
  role_arn: string;
}
export interface CloudwatchMetric {
  metric_name: string;
  metric_namespace: string;
  metric_timestamp?: string;
  metric_unit: string;
  metric_value: string;
  role_arn: string;
}
export interface Dynamodb {
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
export interface PutItem {
  table_name: string;
}
export interface Dynamodbv2 {
  role_arn: string;
  put_item: PutItem;
}
export interface Elasticsearch {
  endpoint: string;
  id: string;
  index: string;
  role_arn: string;
  type: string;
}
export interface CloudwatchAlarm {
  alarm_name: string;
  role_arn: string;
  state_reason: string;
  state_value: string;
}
export interface CloudwatchLogs {
  batch_mode?: boolean;
  log_group_name: string;
  role_arn: string;
}
export interface CloudwatchMetric {
  metric_name: string;
  metric_namespace: string;
  metric_timestamp?: string;
  metric_unit: string;
  metric_value: string;
  role_arn: string;
}
export interface Dynamodb {
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
export interface PutItem {
  table_name: string;
}
export interface Dynamodbv2 {
  role_arn: string;
  put_item: PutItem;
}
export interface Elasticsearch {
  endpoint: string;
  id: string;
  index: string;
  role_arn: string;
  type: string;
}
export interface Firehose {
  batch_mode?: boolean;
  delivery_stream_name: string;
  role_arn: string;
  separator?: string;
}
export interface HttpHeader {
  key: string;
  value: string;
}
export interface Http {
  confirmation_url?: string;
  url: string;
  http_header: HttpHeader;
}
export interface IotAnalytics {
  batch_mode?: boolean;
  channel_name: string;
  role_arn: string;
}
export interface IotEvents {
  batch_mode?: boolean;
  input_name: string;
  message_id?: string;
  role_arn: string;
}
export interface Header {
  key: string;
  value: string;
}
export interface Kafka {
  client_properties: {
    [key: string]: string;
  };
  destination_arn: string;
  key?: string;
  partition?: string;
  topic: string;
  header: Header;
}
export interface Kinesis {
  partition_key?: string;
  role_arn: string;
  stream_name: string;
}
export interface Lambda {
  function_arn: string;
}
export interface Republish {
  qos?: number;
  role_arn: string;
  topic: string;
}
export interface S3 {
  bucket_name: string;
  canned_acl?: string;
  key: string;
  role_arn: string;
}
export interface Sns {
  message_format?: string;
  role_arn: string;
  target_arn: string;
}
export interface Sqs {
  queue_url: string;
  role_arn: string;
  use_base64: boolean;
}
export interface StepFunctions {
  execution_name_prefix?: string;
  role_arn: string;
  state_machine_name: string;
}
export interface Dimension {
  name: string;
  value: string;
}
export interface Timestamp {
  unit: string;
  value: string;
}
export interface Timestream {
  database_name: string;
  role_arn: string;
  table_name: string;
  dimension: Dimension;
  timestamp: Timestamp;
}
export interface ErrorAction {
  cloudwatch_alarm: CloudwatchAlarm;
  cloudwatch_logs: CloudwatchLogs;
  cloudwatch_metric: CloudwatchMetric;
  dynamodb: Dynamodb;
  dynamodbv2: Dynamodbv2;
  elasticsearch: Elasticsearch;
  firehose: Firehose;
  http: Http;
  iot_analytics: IotAnalytics;
  iot_events: IotEvents;
  kafka: Kafka;
  kinesis: Kinesis;
  lambda: Lambda;
  republish: Republish;
  s3: S3;
  sns: Sns;
  sqs: Sqs;
  step_functions: StepFunctions;
  timestream: Timestream;
}
export interface Firehose {
  batch_mode?: boolean;
  delivery_stream_name: string;
  role_arn: string;
  separator?: string;
}
export interface HttpHeader {
  key: string;
  value: string;
}
export interface Http {
  confirmation_url?: string;
  url: string;
  http_header: HttpHeader;
}
export interface IotAnalytics {
  batch_mode?: boolean;
  channel_name: string;
  role_arn: string;
}
export interface IotEvents {
  batch_mode?: boolean;
  input_name: string;
  message_id?: string;
  role_arn: string;
}
export interface Header {
  key: string;
  value: string;
}
export interface Kafka {
  client_properties: {
    [key: string]: string;
  };
  destination_arn: string;
  key?: string;
  partition?: string;
  topic: string;
  header: Header;
}
export interface Kinesis {
  partition_key?: string;
  role_arn: string;
  stream_name: string;
}
export interface Lambda {
  function_arn: string;
}
export interface Republish {
  qos?: number;
  role_arn: string;
  topic: string;
}
export interface S3 {
  bucket_name: string;
  canned_acl?: string;
  key: string;
  role_arn: string;
}
export interface Sns {
  message_format?: string;
  role_arn: string;
  target_arn: string;
}
export interface Sqs {
  queue_url: string;
  role_arn: string;
  use_base64: boolean;
}
export interface StepFunctions {
  execution_name_prefix?: string;
  role_arn: string;
  state_machine_name: string;
}
export interface Dimension {
  name: string;
  value: string;
}
export interface Timestamp {
  unit: string;
  value: string;
}
export interface Timestream {
  database_name: string;
  role_arn: string;
  table_name: string;
  dimension: Dimension;
  timestamp: Timestamp;
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
  cloudwatch_alarm: CloudwatchAlarm;
  cloudwatch_logs: CloudwatchLogs;
  cloudwatch_metric: CloudwatchMetric;
  dynamodb: Dynamodb;
  dynamodbv2: Dynamodbv2;
  elasticsearch: Elasticsearch;
  error_action: ErrorAction;
  firehose: Firehose;
  http: Http;
  iot_analytics: IotAnalytics;
  iot_events: IotEvents;
  kafka: Kafka;
  kinesis: Kinesis;
  lambda: Lambda;
  republish: Republish;
  s3: S3;
  sns: Sns;
  sqs: Sqs;
  step_functions: StepFunctions;
  timestream: Timestream;
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