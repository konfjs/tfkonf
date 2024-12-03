import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfigurationAlarms {
  alarm_name: string;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfiguration {
  alarms: AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfigurationAlarms;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
  type: string;
  value: number;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
  type: string;
  value: number;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
  type: string;
  wait_interval_in_seconds: number;
  canary_size: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
  linear_step_size: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicy {
  maximum_execution_timeout_in_seconds?: number;
  termination_wait_in_seconds?: number;
  traffic_routing_configuration: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyMaximumBatchSize {
  type: string;
  value: number;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize {
  type: string;
  value: number;
}
export interface AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicy {
  maximum_execution_timeout_in_seconds?: number;
  wait_interval_in_seconds: number;
  maximum_batch_size: AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyMaximumBatchSize;
  rollback_maximum_batch_size: AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicyRollbackMaximumBatchSize;
}
export interface AwsSagemakerEndpointArgsDeploymentConfig {
  auto_rollback_configuration: AwsSagemakerEndpointArgsDeploymentConfigAutoRollbackConfiguration;
  blue_green_update_policy: AwsSagemakerEndpointArgsDeploymentConfigBlueGreenUpdatePolicy;
  rolling_update_policy: AwsSagemakerEndpointArgsDeploymentConfigRollingUpdatePolicy;
}
export interface AwsSagemakerEndpointArgs {
  endpoint_config_name: string;
  tags?: {
    [key: string]: string;
  };
  deployment_config: AwsSagemakerEndpointArgsDeploymentConfig;
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