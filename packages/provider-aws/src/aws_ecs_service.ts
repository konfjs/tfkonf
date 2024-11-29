import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEcsServiceArgsalarms {
  alarm_names: string[];
  enable: boolean;
  rollback: boolean;
}
export interface AwsEcsServiceArgsCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface AwsEcsServiceArgsDeploymentCircuitBreaker {
  enable: boolean;
  rollback: boolean;
}
export interface AwsEcsServiceArgsDeploymentController {
  type?: string;
}
export interface AwsEcsServiceArgsLoadBalancer {
  container_name: string;
  container_port: number;
  elb_name?: string;
  target_group_arn?: string;
}
export interface AwsEcsServiceArgsNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}
export interface AwsEcsServiceArgsOrderedPlacementStrategy {
  field?: string;
  type: string;
}
export interface AwsEcsServiceArgsPlacementConstraints {
  expression?: string;
  type: string;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationLogConfigurationSecretOption {
  name: string;
  value_from: string;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationLogConfiguration {
  log_driver: string;
  secret_option: AwsEcsServiceArgsServiceConnectConfigurationLogConfigurationSecretOption;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationserviceClientAlias {
  dns_name?: string;
  port: number;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationservicetimeout {
  idle_timeout_seconds?: number;
  per_request_timeout_seconds?: number;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationservicetlsIssuerCertAuthority {
  aws_pca_authority_arn: string;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationservicetls {
  kms_key?: string;
  role_arn?: string;
  issuer_cert_authority: AwsEcsServiceArgsServiceConnectConfigurationservicetlsIssuerCertAuthority;
}
export interface AwsEcsServiceArgsServiceConnectConfigurationservice {
  discovery_name?: string;
  ingress_port_override?: number;
  port_name: string;
  client_alias: AwsEcsServiceArgsServiceConnectConfigurationserviceClientAlias;
  timeout: AwsEcsServiceArgsServiceConnectConfigurationservicetimeout;
  tls: AwsEcsServiceArgsServiceConnectConfigurationservicetls;
}
export interface AwsEcsServiceArgsServiceConnectConfiguration {
  enabled: boolean;
  namespace?: string;
  log_configuration: AwsEcsServiceArgsServiceConnectConfigurationLogConfiguration;
  service: AwsEcsServiceArgsServiceConnectConfigurationservice;
}
export interface AwsEcsServiceArgsServiceRegistries {
  container_name?: string;
  container_port?: number;
  port?: number;
  registry_arn: string;
}
export interface AwsEcsServiceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEcsServiceArgsVolumeConfigurationManagedEbsVolumeTagSpecifications {
  propagate_tags?: string;
  resource_type: string;
  tags?: {
    [key: string]: string;
  };
}
export interface AwsEcsServiceArgsVolumeConfigurationManagedEbsVolume {
  encrypted?: boolean;
  file_system_type?: string;
  iops?: number;
  kms_key_id?: string;
  role_arn: string;
  size_in_gb?: number;
  snapshot_id?: string;
  throughput?: number;
  volume_type?: string;
  tag_specifications: AwsEcsServiceArgsVolumeConfigurationManagedEbsVolumeTagSpecifications;
}
export interface AwsEcsServiceArgsVolumeConfiguration {
  name: string;
  managed_ebs_volume: AwsEcsServiceArgsVolumeConfigurationManagedEbsVolume;
}
export interface AwsEcsServiceArgsVpcLatticeConfigurations {
  port_name: string;
  role_arn: string;
  target_group_arn: string;
}
export interface AwsEcsServiceArgs {
  availability_zone_rebalancing?: string;
  deployment_maximum_percent?: number;
  deployment_minimum_healthy_percent?: number;
  desired_count?: number;
  enable_ecs_managed_tags?: boolean;
  enable_execute_command?: boolean;
  force_delete?: boolean;
  force_new_deployment?: boolean;
  health_check_grace_period_seconds?: number;
  name: string;
  propagate_tags?: string;
  scheduling_strategy?: string;
  tags?: {
    [key: string]: string;
  };
  task_definition?: string;
  wait_for_steady_state?: boolean;
  alarms: AwsEcsServiceArgsalarms;
  capacity_provider_strategy: AwsEcsServiceArgsCapacityProviderStrategy;
  deployment_circuit_breaker: AwsEcsServiceArgsDeploymentCircuitBreaker;
  deployment_controller: AwsEcsServiceArgsDeploymentController;
  load_balancer: AwsEcsServiceArgsLoadBalancer;
  network_configuration: AwsEcsServiceArgsNetworkConfiguration;
  ordered_placement_strategy: AwsEcsServiceArgsOrderedPlacementStrategy;
  placement_constraints: AwsEcsServiceArgsPlacementConstraints;
  service_connect_configuration: AwsEcsServiceArgsServiceConnectConfiguration;
  service_registries: AwsEcsServiceArgsServiceRegistries;
  timeouts: AwsEcsServiceArgstimeouts;
  volume_configuration: AwsEcsServiceArgsVolumeConfiguration;
  vpc_lattice_configurations: AwsEcsServiceArgsVpcLatticeConfigurations;
}
export class aws_ecs_service extends TerraformResource {
  readonly cluster?: string;
  readonly iam_role?: string;
  readonly id?: string;
  readonly launch_type?: string;
  readonly platform_version?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly triggers?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsServiceArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_service");
  }
}