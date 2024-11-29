import { TerraformConfig, TerraformResource } from "tfs";
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
export interface AwsEmrInstanceFleetArgs {
  cluster_id: string;
  name?: string;
  target_on_demand_capacity?: number;
  target_spot_capacity?: number;
  instance_type_configs: InstanceTypeConfigs;
  launch_specifications: LaunchSpecifications;
}
export class aws_emr_instance_fleet extends TerraformResource {
  readonly id?: string;
  readonly provisioned_on_demand_capacity!: number;
  readonly provisioned_spot_capacity!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrInstanceFleetArgs) {
    super(config, "resource", args, resourceName, "aws_emr_instance_fleet");
  }
}