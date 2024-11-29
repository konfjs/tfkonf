import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrserverlessApplicationArgsAutoStartConfiguration {
  enabled?: boolean;
}
export interface AwsEmrserverlessApplicationArgsAutoStopConfiguration {
  enabled?: boolean;
  idle_timeout_minutes?: number;
}
export interface AwsEmrserverlessApplicationArgsImageConfiguration {
  image_uri: string;
}
export interface AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfigWorkerConfiguration {
  cpu: string;
  memory: string;
}
export interface AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfig {
  worker_count: number;
  worker_configuration: AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfigWorkerConfiguration;
}
export interface AwsEmrserverlessApplicationArgsInitialCapacity {
  initial_capacity_type: string;
  initial_capacity_config: AwsEmrserverlessApplicationArgsInitialCapacityInitialCapacityConfig;
}
export interface AwsEmrserverlessApplicationArgsInteractiveConfiguration {}
export interface AwsEmrserverlessApplicationArgsMaximumCapacity {
  cpu: string;
  memory: string;
}
export interface AwsEmrserverlessApplicationArgsNetworkConfiguration {
  security_group_ids?: string[];
  subnet_ids?: string[];
}
export interface AwsEmrserverlessApplicationArgs {
  architecture?: string;
  name: string;
  release_label: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
  auto_start_configuration: AwsEmrserverlessApplicationArgsAutoStartConfiguration;
  auto_stop_configuration: AwsEmrserverlessApplicationArgsAutoStopConfiguration;
  image_configuration: AwsEmrserverlessApplicationArgsImageConfiguration;
  initial_capacity: AwsEmrserverlessApplicationArgsInitialCapacity;
  interactive_configuration: AwsEmrserverlessApplicationArgsInteractiveConfiguration;
  maximum_capacity: AwsEmrserverlessApplicationArgsMaximumCapacity;
  network_configuration: AwsEmrserverlessApplicationArgsNetworkConfiguration;
}
export class aws_emrserverless_application extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrserverlessApplicationArgs) {
    super(config, "resource", args, resourceName, "aws_emrserverless_application");
  }
}