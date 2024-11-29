import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrClusterArgsAutoTerminationPolicy {
  idle_timeout?: number;
}
export interface AwsEmrClusterArgsBootstrapAction {
  args?: string[];
  name: string;
  path: string;
}
export interface AwsEmrClusterArgsCoreInstanceFleetInstanceTypeConfigsconfigurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface AwsEmrClusterArgsCoreInstanceFleetInstanceTypeConfigsEbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}
export interface AwsEmrClusterArgsCoreInstanceFleetInstanceTypeConfigs {
  bid_price?: string;
  bid_price_as_percentage_of_on_demand_price?: number;
  instance_type: string;
  weighted_capacity?: number;
  configurations: AwsEmrClusterArgsCoreInstanceFleetInstanceTypeConfigsconfigurations;
  ebs_config: AwsEmrClusterArgsCoreInstanceFleetInstanceTypeConfigsEbsConfig;
}
export interface AwsEmrClusterArgsCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
  allocation_strategy: string;
}
export interface AwsEmrClusterArgsCoreInstanceFleetLaunchSpecificationsSpotSpecification {
  allocation_strategy: string;
  block_duration_minutes?: number;
  timeout_action: string;
  timeout_duration_minutes: number;
}
export interface AwsEmrClusterArgsCoreInstanceFleetLaunchSpecifications {
  on_demand_specification: AwsEmrClusterArgsCoreInstanceFleetLaunchSpecificationsOnDemandSpecification;
  spot_specification: AwsEmrClusterArgsCoreInstanceFleetLaunchSpecificationsSpotSpecification;
}
export interface AwsEmrClusterArgsCoreInstanceFleet {
  name?: string;
  target_on_demand_capacity?: number;
  target_spot_capacity?: number;
  instance_type_configs: AwsEmrClusterArgsCoreInstanceFleetInstanceTypeConfigs;
  launch_specifications: AwsEmrClusterArgsCoreInstanceFleetLaunchSpecifications;
}
export interface AwsEmrClusterArgsCoreInstanceGroupEbsConfig {
  iops?: number;
  size: number;
  throughput?: number;
  type: string;
  volumes_per_instance?: number;
}
export interface AwsEmrClusterArgsCoreInstanceGroup {
  autoscaling_policy?: string;
  bid_price?: string;
  instance_count?: number;
  instance_type: string;
  name?: string;
  ebs_config: AwsEmrClusterArgsCoreInstanceGroupEbsConfig;
}
export interface AwsEmrClusterArgsEc2Attributes {
  additional_master_security_groups?: string;
  additional_slave_security_groups?: string;
  instance_profile: string;
  key_name?: string;
}
export interface AwsEmrClusterArgsKerberosAttributes {
  ad_domain_join_password?: string;
  ad_domain_join_user?: string;
  cross_realm_trust_principal_password?: string;
  kdc_admin_password: string;
  realm: string;
}
export interface AwsEmrClusterArgsMasterInstanceFleetInstanceTypeConfigsconfigurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface AwsEmrClusterArgsMasterInstanceFleetInstanceTypeConfigsEbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}
export interface AwsEmrClusterArgsMasterInstanceFleetInstanceTypeConfigs {
  bid_price?: string;
  bid_price_as_percentage_of_on_demand_price?: number;
  instance_type: string;
  weighted_capacity?: number;
  configurations: AwsEmrClusterArgsMasterInstanceFleetInstanceTypeConfigsconfigurations;
  ebs_config: AwsEmrClusterArgsMasterInstanceFleetInstanceTypeConfigsEbsConfig;
}
export interface AwsEmrClusterArgsMasterInstanceFleetLaunchSpecificationsOnDemandSpecification {
  allocation_strategy: string;
}
export interface AwsEmrClusterArgsMasterInstanceFleetLaunchSpecificationsSpotSpecification {
  allocation_strategy: string;
  block_duration_minutes?: number;
  timeout_action: string;
  timeout_duration_minutes: number;
}
export interface AwsEmrClusterArgsMasterInstanceFleetLaunchSpecifications {
  on_demand_specification: AwsEmrClusterArgsMasterInstanceFleetLaunchSpecificationsOnDemandSpecification;
  spot_specification: AwsEmrClusterArgsMasterInstanceFleetLaunchSpecificationsSpotSpecification;
}
export interface AwsEmrClusterArgsMasterInstanceFleet {
  name?: string;
  target_on_demand_capacity?: number;
  target_spot_capacity?: number;
  instance_type_configs: AwsEmrClusterArgsMasterInstanceFleetInstanceTypeConfigs;
  launch_specifications: AwsEmrClusterArgsMasterInstanceFleetLaunchSpecifications;
}
export interface AwsEmrClusterArgsMasterInstanceGroupEbsConfig {
  iops?: number;
  size: number;
  throughput?: number;
  type: string;
  volumes_per_instance?: number;
}
export interface AwsEmrClusterArgsMasterInstanceGroup {
  bid_price?: string;
  instance_count?: number;
  instance_type: string;
  name?: string;
  ebs_config: AwsEmrClusterArgsMasterInstanceGroupEbsConfig;
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
  auto_termination_policy: AwsEmrClusterArgsAutoTerminationPolicy;
  bootstrap_action: AwsEmrClusterArgsBootstrapAction;
  core_instance_fleet: AwsEmrClusterArgsCoreInstanceFleet;
  core_instance_group: AwsEmrClusterArgsCoreInstanceGroup;
  ec2_attributes: AwsEmrClusterArgsEc2Attributes;
  kerberos_attributes: AwsEmrClusterArgsKerberosAttributes;
  master_instance_fleet: AwsEmrClusterArgsMasterInstanceFleet;
  master_instance_group: AwsEmrClusterArgsMasterInstanceGroup;
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