import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEmrInstanceFleetArgsInstanceTypeConfigsConfigurations {
  classification?: string;
  properties?: {
    [key: string]: string;
  };
}
export interface AwsEmrInstanceFleetArgsInstanceTypeConfigsEbsConfig {
  iops?: number;
  size: number;
  type: string;
  volumes_per_instance?: number;
}
export interface AwsEmrInstanceFleetArgsInstanceTypeConfigs {
  bid_price?: string;
  bid_price_as_percentage_of_on_demand_price?: number;
  instance_type: string;
  weighted_capacity?: number;
  configurations: AwsEmrInstanceFleetArgsInstanceTypeConfigsConfigurations;
  ebs_config: AwsEmrInstanceFleetArgsInstanceTypeConfigsEbsConfig;
}
export interface AwsEmrInstanceFleetArgsLaunchSpecificationsOnDemandSpecification {
  allocation_strategy: string;
}
export interface AwsEmrInstanceFleetArgsLaunchSpecificationsSpotSpecification {
  allocation_strategy: string;
  block_duration_minutes?: number;
  timeout_action: string;
  timeout_duration_minutes: number;
}
export interface AwsEmrInstanceFleetArgsLaunchSpecifications {
  on_demand_specification: AwsEmrInstanceFleetArgsLaunchSpecificationsOnDemandSpecification;
  spot_specification: AwsEmrInstanceFleetArgsLaunchSpecificationsSpotSpecification;
}
export interface AwsEmrInstanceFleetArgs {
  cluster_id: string;
  name?: string;
  target_on_demand_capacity?: number;
  target_spot_capacity?: number;
  instance_type_configs: AwsEmrInstanceFleetArgsInstanceTypeConfigs;
  launch_specifications: AwsEmrInstanceFleetArgsLaunchSpecifications;
}
export class aws_emr_instance_fleet extends TerraformResource {
  readonly id?: string;
  readonly provisioned_on_demand_capacity!: number;
  readonly provisioned_spot_capacity!: number;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrInstanceFleetArgs) {
    super(config, "resource", args, resourceName, "aws_emr_instance_fleet");
  }
}