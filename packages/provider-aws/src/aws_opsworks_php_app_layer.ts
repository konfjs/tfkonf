import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsOpsworksPhpAppLayerArgsCloudwatchConfigurationLogStreams {
  batch_count?: number;
  batch_size?: number;
  buffer_duration?: number;
  datetime_format?: string;
  encoding?: string;
  file: string;
  file_fingerprint_lines?: string;
  initial_position?: string;
  log_group_name: string;
  multiline_start_pattern?: string;
  time_zone?: string;
}
export interface AwsOpsworksPhpAppLayerArgsCloudwatchConfiguration {
  enabled?: boolean;
  log_streams: AwsOpsworksPhpAppLayerArgsCloudwatchConfigurationLogStreams;
}
export interface AwsOpsworksPhpAppLayerArgsEbsVolume {
  encrypted?: boolean;
  iops?: number;
  mount_point: string;
  number_of_disks: number;
  raid_level?: string;
  size: number;
  type?: string;
}
export interface AwsOpsworksPhpAppLayerArgsLoadBasedAutoScalingDownscaling {
  alarms?: string[];
  cpu_threshold?: number;
  ignore_metrics_time?: number;
  instance_count?: number;
  load_threshold?: number;
  memory_threshold?: number;
  thresholds_wait_time?: number;
}
export interface AwsOpsworksPhpAppLayerArgsLoadBasedAutoScalingUpscaling {
  alarms?: string[];
  cpu_threshold?: number;
  ignore_metrics_time?: number;
  instance_count?: number;
  load_threshold?: number;
  memory_threshold?: number;
  thresholds_wait_time?: number;
}
export interface AwsOpsworksPhpAppLayerArgsLoadBasedAutoScaling {
  enable?: boolean;
  downscaling: AwsOpsworksPhpAppLayerArgsLoadBasedAutoScalingDownscaling;
  upscaling: AwsOpsworksPhpAppLayerArgsLoadBasedAutoScalingUpscaling;
}
export interface AwsOpsworksPhpAppLayerArgs {
  auto_assign_elastic_ips?: boolean;
  auto_assign_public_ips?: boolean;
  auto_healing?: boolean;
  custom_configure_recipes?: string[];
  custom_deploy_recipes?: string[];
  custom_instance_profile_arn?: string;
  custom_json?: string;
  custom_security_group_ids?: string[];
  custom_setup_recipes?: string[];
  custom_shutdown_recipes?: string[];
  custom_undeploy_recipes?: string[];
  drain_elb_on_shutdown?: boolean;
  elastic_load_balancer?: string;
  install_updates_on_boot?: boolean;
  instance_shutdown_timeout?: number;
  name?: string;
  stack_id: string;
  system_packages?: string[];
  tags?: {
    [key: string]: string;
  };
  use_ebs_optimized_instances?: boolean;
  cloudwatch_configuration: AwsOpsworksPhpAppLayerArgsCloudwatchConfiguration;
  ebs_volume: AwsOpsworksPhpAppLayerArgsEbsVolume;
  load_based_auto_scaling: AwsOpsworksPhpAppLayerArgsLoadBasedAutoScaling;
}
export class aws_opsworks_php_app_layer extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsOpsworksPhpAppLayerArgs) {
    super(config, "resource", args, resourceName, "aws_opsworks_php_app_layer");
  }
}