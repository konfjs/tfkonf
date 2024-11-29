import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMskconnectConnectorArgsCapacityAutoscalingScaleInPolicy {}
export interface AwsMskconnectConnectorArgsCapacityAutoscalingScaleOutPolicy {}
export interface AwsMskconnectConnectorArgsCapacityAutoscaling {
  max_worker_count: number;
  mcu_count?: number;
  min_worker_count: number;
  scale_in_policy: AwsMskconnectConnectorArgsCapacityAutoscalingScaleInPolicy;
  scale_out_policy: AwsMskconnectConnectorArgsCapacityAutoscalingScaleOutPolicy;
}
export interface AwsMskconnectConnectorArgsCapacityProvisionedCapacity {
  mcu_count?: number;
  worker_count: number;
}
export interface AwsMskconnectConnectorArgsCapacity {
  autoscaling: AwsMskconnectConnectorArgsCapacityAutoscaling;
  provisioned_capacity: AwsMskconnectConnectorArgsCapacityProvisionedCapacity;
}
export interface AwsMskconnectConnectorArgsKafkaClusterApacheKafkaClusterVpc {
  security_groups: string[];
  subnets: string[];
}
export interface AwsMskconnectConnectorArgsKafkaClusterApacheKafkaCluster {
  bootstrap_servers: string;
  vpc: AwsMskconnectConnectorArgsKafkaClusterApacheKafkaClusterVpc;
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
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryFirehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryS3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface AwsMskconnectConnectorArgsLogDeliveryWorkerLogDelivery {
  cloudwatch_logs: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryCloudwatchLogs;
  firehose: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryFirehose;
  s3: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDeliveryS3;
}
export interface AwsMskconnectConnectorArgsLogDelivery {
  worker_log_delivery: AwsMskconnectConnectorArgsLogDeliveryWorkerLogDelivery;
}
export interface AwsMskconnectConnectorArgsPluginCustomPlugin {
  arn: string;
  revision: number;
}
export interface AwsMskconnectConnectorArgsPlugin {
  custom_plugin: AwsMskconnectConnectorArgsPluginCustomPlugin;
}
export interface AwsMskconnectConnectorArgsTimeouts {
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
  capacity: AwsMskconnectConnectorArgsCapacity;
  kafka_cluster: AwsMskconnectConnectorArgsKafkaCluster;
  kafka_cluster_client_authentication: AwsMskconnectConnectorArgsKafkaClusterClientAuthentication;
  kafka_cluster_encryption_in_transit: AwsMskconnectConnectorArgsKafkaClusterEncryptionInTransit;
  log_delivery: AwsMskconnectConnectorArgsLogDelivery;
  plugin: AwsMskconnectConnectorArgsPlugin;
  timeouts: AwsMskconnectConnectorArgsTimeouts;
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