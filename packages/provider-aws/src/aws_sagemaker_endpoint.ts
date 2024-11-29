import { TerraformConfig, TerraformResource } from "tfs";
export interface Alarms {
  alarm_name: string;
}
export interface AutoRollbackConfiguration {
  alarms: Alarms;
}
export interface CanarySize {
  type: string;
  value: number;
}
export interface LinearStepSize {
  type: string;
  value: number;
}
export interface TrafficRoutingConfiguration {
  type: string;
  wait_interval_in_seconds: number;
  canary_size: CanarySize;
  linear_step_size: LinearStepSize;
}
export interface BlueGreenUpdatePolicy {
  maximum_execution_timeout_in_seconds?: number;
  termination_wait_in_seconds?: number;
  traffic_routing_configuration: TrafficRoutingConfiguration;
}
export interface MaximumBatchSize {
  type: string;
  value: number;
}
export interface RollbackMaximumBatchSize {
  type: string;
  value: number;
}
export interface RollingUpdatePolicy {
  maximum_execution_timeout_in_seconds?: number;
  wait_interval_in_seconds: number;
  maximum_batch_size: MaximumBatchSize;
  rollback_maximum_batch_size: RollbackMaximumBatchSize;
}
export interface DeploymentConfig {
  auto_rollback_configuration: AutoRollbackConfiguration;
  blue_green_update_policy: BlueGreenUpdatePolicy;
  rolling_update_policy: RollingUpdatePolicy;
}
export interface AwsSagemakerEndpointArgs {
  endpoint_config_name: string;
  tags?: {
    [key: string]: string;
  };
  deployment_config: DeploymentConfig;
}
export class aws_sagemaker_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly name?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_endpoint");
  }
}