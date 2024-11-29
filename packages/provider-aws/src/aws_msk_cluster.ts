import { TerraformConfig, TerraformResource } from "tfs";
export interface PublicAccess {}
export interface Sasl {}
export interface ClientAuthentication {
  sasl: Sasl;
}
export interface VpcConnectivity {
  client_authentication: ClientAuthentication;
}
export interface ConnectivityInfo {
  public_access: PublicAccess;
  vpc_connectivity: VpcConnectivity;
}
export interface ProvisionedThroughput {
  enabled?: boolean;
  volume_throughput?: number;
}
export interface EbsStorageInfo {
  volume_size?: number;
  provisioned_throughput: ProvisionedThroughput;
}
export interface StorageInfo {
  ebs_storage_info: EbsStorageInfo;
}
export interface BrokerNodeGroupInfo {
  az_distribution?: string;
  client_subnets: string[];
  instance_type: string;
  security_groups: string[];
  connectivity_info: ConnectivityInfo;
  storage_info: StorageInfo;
}
export interface Sasl {
  iam?: boolean;
  scram?: boolean;
}
export interface Tls {
  certificate_authority_arns?: string[];
}
export interface ClientAuthentication {
  unauthenticated?: boolean;
  sasl: Sasl;
  tls: Tls;
}
export interface ConfigurationInfo {
  arn: string;
  revision: number;
}
export interface EncryptionInTransit {
  client_broker?: string;
  in_cluster?: boolean;
}
export interface EncryptionInfo {
  encryption_in_transit: EncryptionInTransit;
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
export interface BrokerLogs {
  cloudwatch_logs: CloudwatchLogs;
  firehose: Firehose;
  s3: S3;
}
export interface LoggingInfo {
  broker_logs: BrokerLogs;
}
export interface JmxExporter {
  enabled_in_broker: boolean;
}
export interface NodeExporter {
  enabled_in_broker: boolean;
}
export interface Prometheus {
  jmx_exporter: JmxExporter;
  node_exporter: NodeExporter;
}
export interface OpenMonitoring {
  prometheus: Prometheus;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsMskClusterArgs {
  cluster_name: string;
  enhanced_monitoring?: string;
  kafka_version: string;
  number_of_broker_nodes: number;
  tags?: {
    [key: string]: string;
  };
  broker_node_group_info: BrokerNodeGroupInfo;
  client_authentication: ClientAuthentication;
  configuration_info: ConfigurationInfo;
  encryption_info: EncryptionInfo;
  logging_info: LoggingInfo;
  open_monitoring: OpenMonitoring;
  timeouts: Timeouts;
}
export class aws_msk_cluster extends TerraformResource {
  readonly arn!: string;
  readonly bootstrap_brokers!: string;
  readonly bootstrap_brokers_public_sasl_iam!: string;
  readonly bootstrap_brokers_public_sasl_scram!: string;
  readonly bootstrap_brokers_public_tls!: string;
  readonly bootstrap_brokers_sasl_iam!: string;
  readonly bootstrap_brokers_sasl_scram!: string;
  readonly bootstrap_brokers_tls!: string;
  readonly bootstrap_brokers_vpc_connectivity_sasl_iam!: string;
  readonly bootstrap_brokers_vpc_connectivity_sasl_scram!: string;
  readonly bootstrap_brokers_vpc_connectivity_tls!: string;
  readonly cluster_uuid!: string;
  readonly current_version!: string;
  readonly id?: string;
  readonly storage_mode?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly zookeeper_connect_string!: string;
  readonly zookeeper_connect_string_tls!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskClusterArgs) {
    super(config, "resource", args, resourceName, "aws_msk_cluster");
  }
}