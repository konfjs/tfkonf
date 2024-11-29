import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoPublicAccess {}
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationsasl {}
export interface AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
  sasl: AwsMskClusterArgsBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationsasl;
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
export interface AwsMskClusterArgsClientAuthenticationsasl {
  iam?: boolean;
  scram?: boolean;
}
export interface AwsMskClusterArgsClientAuthenticationtls {
  certificate_authority_arns?: string[];
}
export interface AwsMskClusterArgsClientAuthentication {
  unauthenticated?: boolean;
  sasl: AwsMskClusterArgsClientAuthenticationsasl;
  tls: AwsMskClusterArgsClientAuthenticationtls;
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
export interface AwsMskClusterArgsLoggingInfoBrokerLogsfirehose {
  delivery_stream?: string;
  enabled: boolean;
}
export interface AwsMskClusterArgsLoggingInfoBrokerLogss3 {
  bucket?: string;
  enabled: boolean;
  prefix?: string;
}
export interface AwsMskClusterArgsLoggingInfoBrokerLogs {
  cloudwatch_logs: AwsMskClusterArgsLoggingInfoBrokerLogsCloudwatchLogs;
  firehose: AwsMskClusterArgsLoggingInfoBrokerLogsfirehose;
  s3: AwsMskClusterArgsLoggingInfoBrokerLogss3;
}
export interface AwsMskClusterArgsLoggingInfo {
  broker_logs: AwsMskClusterArgsLoggingInfoBrokerLogs;
}
export interface AwsMskClusterArgsOpenMonitoringprometheusJmxExporter {
  enabled_in_broker: boolean;
}
export interface AwsMskClusterArgsOpenMonitoringprometheusNodeExporter {
  enabled_in_broker: boolean;
}
export interface AwsMskClusterArgsOpenMonitoringprometheus {
  jmx_exporter: AwsMskClusterArgsOpenMonitoringprometheusJmxExporter;
  node_exporter: AwsMskClusterArgsOpenMonitoringprometheusNodeExporter;
}
export interface AwsMskClusterArgsOpenMonitoring {
  prometheus: AwsMskClusterArgsOpenMonitoringprometheus;
}
export interface AwsMskClusterArgstimeouts {
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
  timeouts: AwsMskClusterArgstimeouts;
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