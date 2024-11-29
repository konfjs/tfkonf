import { TerraformConfig, TerraformResource } from "tfs";
export interface ScaleInPolicy {}
export interface ScaleOutPolicy {}
export interface Autoscaling {
  max_worker_count: number;
  mcu_count?: number;
  min_worker_count: number;
  scale_in_policy: ScaleInPolicy;
  scale_out_policy: ScaleOutPolicy;
}
export interface ProvisionedCapacity {
  mcu_count?: number;
  worker_count: number;
}
export interface Capacity {
  autoscaling: Autoscaling;
  provisioned_capacity: ProvisionedCapacity;
}
export interface Vpc {
  security_groups: string[];
  subnets: string[];
}
export interface ApacheKafkaCluster {
  bootstrap_servers: string;
  vpc: Vpc;
}
export interface KafkaCluster {
  apache_kafka_cluster: ApacheKafkaCluster;
}
export interface KafkaClusterClientAuthentication {
  authentication_type?: string;
}
export interface KafkaClusterEncryptionInTransit {
  encryption_type?: string;
}
export interface CloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}
export interface Firehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface S3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface WorkerLogDelivery {
  cloudwatch_logs: CloudwatchLogs;
  firehose: Firehose;
  s3: S3;
}
export interface LogDelivery {
  worker_log_delivery: WorkerLogDelivery;
}
export interface CustomPlugin {
  arn: string;
  revision: number;
}
export interface Plugin {
  custom_plugin: CustomPlugin;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WorkerConfiguration {
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
  capacity: Capacity;
  kafka_cluster: KafkaCluster;
  kafka_cluster_client_authentication: KafkaClusterClientAuthentication;
  kafka_cluster_encryption_in_transit: KafkaClusterEncryptionInTransit;
  log_delivery: LogDelivery;
  plugin: Plugin;
  timeouts: Timeouts;
  worker_configuration: WorkerConfiguration;
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