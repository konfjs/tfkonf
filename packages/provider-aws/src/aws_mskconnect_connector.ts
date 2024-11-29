import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMskconnectConnectorArgscapacityautoscalingScaleInPolicy {}
export interface AwsMskconnectConnectorArgscapacityautoscalingScaleOutPolicy {}
export interface AwsMskconnectConnectorArgscapacityautoscaling {
  max_worker_count: number;
  mcu_count?: number;
  min_worker_count: number;
  scale_in_policy: AwsMskconnectConnectorArgscapacityautoscalingScaleInPolicy;
  scale_out_policy: AwsMskconnectConnectorArgscapacityautoscalingScaleOutPolicy;
}
export interface AwsMskconnectConnectorArgscapacityProvisionedCapacity {
  mcu_count?: number;
  worker_count: number;
}
export interface AwsMskconnectConnectorArgscapacity {
  autoscaling: AwsMskconnectConnectorArgscapacityautoscaling;
  provisioned_capacity: AwsMskconnectConnectorArgscapacityProvisionedCapacity;
}
export interface AwsMskconnectConnectorArgsKafkaClusterApacheKafkaClustervpc {
  security_groups: string[];
  subnets: string[];
}
export interface AwsMskconnectConnectorArgsKafkaClusterApacheKafkaCluster {
  bootstrap_servers: string;
  vpc: AwsMskconnectConnectorArgsKafkaClusterApacheKafkaClustervpc;
}
export interface AwsMskconnectConnectorArgsKafkaCluster {
  apache_kafka_cluster: AwsMskconnectConnectorArgsKafkaClusterApacheKafkaCluster;
}
export interface AwsMskconnectConnectorArgsKafkaClusterClientAuthentication {
  authentication_type?: string;
}
export interface AwsMskconnectConnectorArgsKafkaClusterEncryptionInTransit {
  encryption_type?: string;
}
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryCloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryfirehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliverys3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDelivery {
  cloudwatch_logs: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryCloudwatchLogs;
  firehose: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryfirehose;
  s3: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliverys3;
}
export interface AwsMskconnectConnectorArgsLogDelivery {
  worker_log_delivery: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDelivery;
}
export interface AwsMskconnectConnectorArgspluginCustomPlugin {
  arn: string;
  revision: number;
}
export interface AwsMskconnectConnectorArgsplugin {
  custom_plugin: AwsMskconnectConnectorArgspluginCustomPlugin;
}
export interface AwsMskconnectConnectorArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMskconnectConnectorArgsWorkerConfiguration {
  arn: string;
  revision: number;
}
export interface AwsMskconnectConnectorArgs {
  connector_configuration: {
    [key: string]: string;
  };
  description?: string;
  kafkaconnect_version: string;
  name: string;
  service_execution_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  capacity: AwsMskconnectConnectorArgscapacity;
  kafka_cluster: AwsMskconnectConnectorArgsKafkaCluster;
  kafka_cluster_client_authentication: AwsMskconnectConnectorArgsKafkaClusterClientAuthentication;
  kafka_cluster_encryption_in_transit: AwsMskconnectConnectorArgsKafkaClusterEncryptionInTransit;
  log_delivery: AwsMskconnectConnectorArgsLogDelivery;
  plugin: AwsMskconnectConnectorArgsplugin;
  timeouts: AwsMskconnectConnectorArgstimeouts;
  worker_configuration: AwsMskconnectConnectorArgsWorkerConfiguration;
}
export class aws_mskconnect_connector extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskconnectConnectorArgs) {
    super(config, "resource", args, resourceName, "aws_mskconnect_connector");
  }
}