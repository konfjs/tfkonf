import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoPublicAccess {}
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {}
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
  sasl: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
}
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
  client_authentication: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
}
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfo {
  public_access: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoPublicAccess;
  vpc_connectivity: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
}
export interface AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
  enabled?: boolean;
  volume_throughput?: number;
}
export interface AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
  volume_size?: number;
  provisioned_throughput: AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
}
export interface AwsMskClusterArgsBrokerNodeGroupInfoStorageInfo {
  ebs_storage_info: AwsMskClusterArgsBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
}
export interface AwsMskClusterArgsBrokerNodeGroupInfo {
  az_distribution?: string;
  client_subnets: string[];
  instance_type: string;
  security_groups: string[];
  connectivity_info: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfo;
  storage_info: AwsMskClusterArgsBrokerNodeGroupInfoStorageInfo;
}
export interface AwsMskClusterArgsClientAuthenticationSasl {
  iam?: boolean;
  scram?: boolean;
}
export interface AwsMskClusterArgsClientAuthenticationTls {
  certificate_authority_arns?: string[];
}
export interface AwsMskClusterArgsClientAuthentication {
  unauthenticated?: boolean;
  sasl: AwsMskClusterArgsClientAuthenticationSasl;
  tls: AwsMskClusterArgsClientAuthenticationTls;
}
export interface AwsMskClusterArgsConfigurationInfo {
  arn: string;
  revision: number;
}
export interface AwsMskClusterArgsEncryptionInfoEncryptionInTransit {
  client_broker?: string;
  in_cluster?: boolean;
}
export interface AwsMskClusterArgsEncryptionInfo {
  encryption_in_transit: AwsMskClusterArgsEncryptionInfoEncryptionInTransit;
}
export interface AwsMskClusterArgsLoggingInfoBrokerLogsCloudwatchLogs {
  enabled: boolean;
  log_group?: string;
}
export interface AwsMskClusterArgsLoggingInfoBrokerLogsFirehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface AwsMskClusterArgsLoggingInfoBrokerLogsS3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface AwsMskClusterArgsLoggingInfoBrokerLogs {
  cloudwatch_logs: AwsMskClusterArgsLoggingInfoBrokerLogsCloudwatchLogs;
  firehose: AwsMskClusterArgsLoggingInfoBrokerLogsFirehose;
  s3: AwsMskClusterArgsLoggingInfoBrokerLogsS3;
}
export interface AwsMskClusterArgsLoggingInfo {
  broker_logs: AwsMskClusterArgsLoggingInfoBrokerLogs;
}
export interface AwsMskClusterArgsOpenMonitoringPrometheusJmxExporter {
  enabled_in_broker: boolean;
}
export interface AwsMskClusterArgsOpenMonitoringPrometheusNodeExporter {
  enabled_in_broker: boolean;
}
export interface AwsMskClusterArgsOpenMonitoringPrometheus {
  jmx_exporter: AwsMskClusterArgsOpenMonitoringPrometheusJmxExporter;
  node_exporter: AwsMskClusterArgsOpenMonitoringPrometheusNodeExporter;
}
export interface AwsMskClusterArgsOpenMonitoring {
  prometheus: AwsMskClusterArgsOpenMonitoringPrometheus;
}
export interface AwsMskClusterArgsTimeouts {
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
  broker_node_group_info: AwsMskClusterArgsBrokerNodeGroupInfo;
  client_authentication: AwsMskClusterArgsClientAuthentication;
  configuration_info: AwsMskClusterArgsConfigurationInfo;
  encryption_info: AwsMskClusterArgsEncryptionInfo;
  logging_info: AwsMskClusterArgsLoggingInfo;
  open_monitoring: AwsMskClusterArgsOpenMonitoring;
  timeouts?: AwsMskClusterArgsTimeouts;
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