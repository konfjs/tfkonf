import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodedeployDeploymentGroupArgsAlarmConfiguration {
  alarms?: string[];
  enabled?: boolean;
  ignore_poll_alarm_failure?: boolean;
}
export interface AwsCodedeployDeploymentGroupArgsAutoRollbackConfiguration {
  enabled?: boolean;
  events?: string[];
}
export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigDeploymentReadyOption {
  action_on_timeout?: string;
  wait_time_in_minutes?: number;
}
export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  action?: string;
}
export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  action?: string;
  termination_wait_time_in_minutes?: number;
}
export interface AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig {
  deployment_ready_option: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigDeploymentReadyOption;
  green_fleet_provisioning_option: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigGreenFleetProvisioningOption;
  terminate_blue_instances_on_deployment_success: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess;
}
export interface AwsCodedeployDeploymentGroupArgsDeploymentStyle {
  deployment_option?: string;
  deployment_type?: string;
}
export interface AwsCodedeployDeploymentGroupArgsEc2TagFilter {
  key?: string;
  type?: string;
  value?: string;
}
export interface AwsCodedeployDeploymentGroupArgsEc2TagSetEc2TagFilter {
  key?: string;
  type?: string;
  value?: string;
}
export interface AwsCodedeployDeploymentGroupArgsEc2TagSet {
  ec2_tag_filter: AwsCodedeployDeploymentGroupArgsEc2TagSetEc2TagFilter;
}
export interface AwsCodedeployDeploymentGroupArgsEcsService {
  cluster_name: string;
  service_name: string;
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoElbInfo {
  name?: string;
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupInfo {
  name?: string;
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  listener_arns: string[];
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  name: string;
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  listener_arns: string[];
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfo {
  prod_traffic_route: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute;
  target_group: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTargetGroup;
  test_traffic_route: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute;
}
export interface AwsCodedeployDeploymentGroupArgsLoadBalancerInfo {
  elb_info: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoElbInfo;
  target_group_info: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupInfo;
  target_group_pair_info: AwsCodedeployDeploymentGroupArgsLoadBalancerInfoTargetGroupPairInfo;
}
export interface AwsCodedeployDeploymentGroupArgsOnPremisesInstanceTagFilter {
  key?: string;
  type?: string;
  value?: string;
}
export interface AwsCodedeployDeploymentGroupArgsTriggerConfiguration {
  trigger_events: string[];
  trigger_name: string;
  trigger_target_arn: string;
}
export interface AwsCodedeployDeploymentGroupArgs {
  app_name: string;
  autoscaling_groups?: string[];
  deployment_config_name?: string;
  deployment_group_name: string;
  outdated_instances_strategy?: string;
  service_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  termination_hook_enabled?: boolean;
  alarm_configuration: AwsCodedeployDeploymentGroupArgsAlarmConfiguration;
  auto_rollback_configuration: AwsCodedeployDeploymentGroupArgsAutoRollbackConfiguration;
  blue_green_deployment_config: AwsCodedeployDeploymentGroupArgsBlueGreenDeploymentConfig;
  deployment_style: AwsCodedeployDeploymentGroupArgsDeploymentStyle;
  ec2_tag_filter: AwsCodedeployDeploymentGroupArgsEc2TagFilter;
  ec2_tag_set: AwsCodedeployDeploymentGroupArgsEc2TagSet;
  ecs_service: AwsCodedeployDeploymentGroupArgsEcsService;
  load_balancer_info: AwsCodedeployDeploymentGroupArgsLoadBalancerInfo;
  on_premises_instance_tag_filter: AwsCodedeployDeploymentGroupArgsOnPremisesInstanceTagFilter;
  trigger_configuration: AwsCodedeployDeploymentGroupArgsTriggerConfiguration;
}
export class aws_codedeploy_deployment_group extends TerraformResource {
  readonly arn!: string;
  readonly compute_platform!: string;
  readonly deployment_group_id!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodedeployDeploymentGroupArgs) {
    super(config, "resource", args, resourceName, "aws_codedeploy_deployment_group");
  }
}