import { TerraformConfig, TerraformResource } from "tfs";
export interface Alarms {
  alarm_names: string[];
  enable: boolean;
  rollback: boolean;
}
export interface CapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}
export interface DeploymentCircuitBreaker {
  enable: boolean;
  rollback: boolean;
}
export interface DeploymentController {
  type?: string;
}
export interface LoadBalancer {
  container_name: string;
  container_port: number;
  elb_name?: string;
  target_group_arn?: string;
}
export interface NetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}
export interface OrderedPlacementStrategy {
  field?: string;
  type: string;
}
export interface PlacementConstraints {
  expression?: string;
  type: string;
}
export interface SecretOption {
  name: string;
  value_from: string;
}
export interface LogConfiguration {
  log_driver: string;
  secret_option: SecretOption;
}
export interface ClientAlias {
  dns_name?: string;
  port: number;
}
export interface Timeout {
  idle_timeout_seconds?: number;
  per_request_timeout_seconds?: number;
}
export interface IssuerCertAuthority {
  aws_pca_authority_arn: string;
}
export interface Tls {
  kms_key?: string;
  role_arn?: string;
  issuer_cert_authority: IssuerCertAuthority;
}
export interface Service {
  discovery_name?: string;
  ingress_port_override?: number;
  port_name: string;
  client_alias: ClientAlias;
  timeout: Timeout;
  tls: Tls;
}
export interface ServiceConnectConfiguration {
  enabled: boolean;
  namespace?: string;
  log_configuration: LogConfiguration;
  service: Service;
}
export interface ServiceRegistries {
  container_name?: string;
  container_port?: number;
  port?: number;
  registry_arn: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface TagSpecifications {
  propagate_tags?: string;
  resource_type: string;
  tags?: {
    [key: string]: string;
  };
}
export interface ManagedEbsVolume {
  encrypted?: boolean;
  file_system_type?: string;
  iops?: number;
  kms_key_id?: string;
  role_arn: string;
  size_in_gb?: number;
  snapshot_id?: string;
  throughput?: number;
  volume_type?: string;
  tag_specifications: TagSpecifications;
}
export interface VolumeConfiguration {
  name: string;
  managed_ebs_volume: ManagedEbsVolume;
}
export interface VpcLatticeConfigurations {
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
  alarms: Alarms;
  capacity_provider_strategy: CapacityProviderStrategy;
  deployment_circuit_breaker: DeploymentCircuitBreaker;
  deployment_controller: DeploymentController;
  load_balancer: LoadBalancer;
  network_configuration: NetworkConfiguration;
  ordered_placement_strategy: OrderedPlacementStrategy;
  placement_constraints: PlacementConstraints;
  service_connect_configuration: ServiceConnectConfiguration;
  service_registries: ServiceRegistries;
  timeouts: Timeouts;
  volume_configuration: VolumeConfiguration;
  vpc_lattice_configurations: VpcLatticeConfigurations;
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