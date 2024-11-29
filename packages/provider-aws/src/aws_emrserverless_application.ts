import { TerraformConfig, TerraformResource } from "tfs";
export interface AutoStartConfiguration {
  enabled?: boolean;
}
export interface AutoStopConfiguration {
  enabled?: boolean;
  idle_timeout_minutes?: number;
}
export interface ImageConfiguration {
  image_uri: string;
}
export interface WorkerConfiguration {
  cpu: string;
  memory: string;
}
export interface InitialCapacityConfig {
  worker_count: number;
  worker_configuration: WorkerConfiguration;
}
export interface InitialCapacity {
  initial_capacity_type: string;
  initial_capacity_config: InitialCapacityConfig;
}
export interface InteractiveConfiguration {}
export interface MaximumCapacity {
  cpu: string;
  memory: string;
}
export interface NetworkConfiguration {
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
  auto_start_configuration: AutoStartConfiguration;
  auto_stop_configuration: AutoStopConfiguration;
  image_configuration: ImageConfiguration;
  initial_capacity: InitialCapacity;
  interactive_configuration: InteractiveConfiguration;
  maximum_capacity: MaximumCapacity;
  network_configuration: NetworkConfiguration;
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