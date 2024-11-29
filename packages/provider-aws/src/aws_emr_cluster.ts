import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoTerminationPolicy {
  idle_timeout?: number;
}
export interface BootstrapAction {
  args?: string[];
  name: string;
  path: string;
}
export interface Configurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface EbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}
export interface InstanceTypeConfigs {
  bid_price?: string;
  bid_price_as_percentage_of_on_demand_price?: number;
  instance_type: string;
  weighted_capacity?: number;
  configurations: Configurations;
  ebs_config: EbsConfig;
}
export interface OnDemandSpecification {
  allocation_strategy: string;
}
export interface SpotSpecification {
  allocation_strategy: string;
  block_duration_minutes?: number;
  timeout_action: string;
  timeout_duration_minutes: number;
}
export interface LaunchSpecifications {
  on_demand_specification: OnDemandSpecification;
  spot_specification: SpotSpecification;
}
export interface CoreInstanceFleet {
  name?: string;
  target_on_demand_capacity?: number;
  target_spot_capacity?: number;
  instance_type_configs: InstanceTypeConfigs;
  launch_specifications: LaunchSpecifications;
}
export interface EbsConfig {
  iops?: number;
  size: number;
  throughput?: number;
  type: string;
  volumes_per_instance?: number;
}
export interface CoreInstanceGroup {
  autoscaling_policy?: string;
  bid_price?: string;
  instance_count?: number;
  instance_type: string;
  name?: string;
  ebs_config: EbsConfig;
}
export interface Ec2Attributes {
  additional_master_security_groups?: string;
  additional_slave_security_groups?: string;
  instance_profile: string;
  key_name?: string;
}
export interface KerberosAttributes {
  ad_domain_join_password?: string;
  ad_domain_join_user?: string;
  cross_realm_trust_principal_password?: string;
  kdc_admin_password: string;
  realm: string;
}
export interface Configurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface EbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}
export interface InstanceTypeConfigs {
  bid_price?: string;
  bid_price_as_percentage_of_on_demand_price?: number;
  instance_type: string;
  weighted_capacity?: number;
  configurations: Configurations;
  ebs_config: EbsConfig;
}
export interface OnDemandSpecification {
  allocation_strategy: string;
}
export interface SpotSpecification {
  allocation_strategy: string;
  block_duration_minutes?: number;
  timeout_action: string;
  timeout_duration_minutes: number;
}
export interface LaunchSpecifications {
  on_demand_specification: OnDemandSpecification;
  spot_specification: SpotSpecification;
}
export interface MasterInstanceFleet {
  name?: string;
  target_on_demand_capacity?: number;
  target_spot_capacity?: number;
  instance_type_configs: InstanceTypeConfigs;
  launch_specifications: LaunchSpecifications;
}
export interface EbsConfig {
  iops?: number;
  size: number;
  throughput?: number;
  type: string;
  volumes_per_instance?: number;
}
export interface MasterInstanceGroup {
  bid_price?: string;
  instance_count?: number;
  instance_type: string;
  name?: string;
  ebs_config: EbsConfig;
}
export interface AwsEmrClusterArgs {
  additional_info?: string;
  applications?: string[];
  autoscaling_role?: string;
  configurations?: string;
  configurations_json?: string;
  custom_ami_id?: string;
  ebs_root_volume_size?: number;
  list_steps_states?: string[];
  log_encryption_kms_key_id?: string;
  log_uri?: string;
  name: string;
  placement_group_config?: any[];
  release_label: string;
  security_configuration?: string;
  service_role: string;
  step_concurrency_level?: number;
  tags?: {
    [key: string]: string;
  };
  unhealthy_node_replacement?: boolean;
  visible_to_all_users?: boolean;
  auto_termination_policy: AutoTerminationPolicy;
  bootstrap_action: BootstrapAction;
  core_instance_fleet: CoreInstanceFleet;
  core_instance_group: CoreInstanceGroup;
  ec2_attributes: Ec2Attributes;
  kerberos_attributes: KerberosAttributes;
  master_instance_fleet: MasterInstanceFleet;
  master_instance_group: MasterInstanceGroup;
}
export class aws_emr_cluster extends TerraformResource {
  readonly arn!: string;
  readonly cluster_state!: string;
  readonly id?: string;
  readonly keep_job_flow_alive_when_no_steps?: boolean;
  readonly master_public_dns!: string;
  readonly scale_down_behavior?: string;
  readonly step?: any[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly termination_protection?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrClusterArgs) {
    super(config, "resource", args, resourceName, "aws_emr_cluster");
  }
}