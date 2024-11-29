import { TerraformConfig, TerraformResource } from "tfs";
export interface AlarmConfiguration {
  alarms?: string[];
  enabled?: boolean;
  ignore_poll_alarm_failure?: boolean;
}
export interface AutoRollbackConfiguration {
  enabled?: boolean;
  events?: string[];
}
export interface DeploymentReadyOption {
  action_on_timeout?: string;
  wait_time_in_minutes?: number;
}
export interface GreenFleetProvisioningOption {
  action?: string;
}
export interface TerminateBlueInstancesOnDeploymentSuccess {
  action?: string;
  termination_wait_time_in_minutes?: number;
}
export interface BlueGreenDeploymentConfig {
  deployment_ready_option: DeploymentReadyOption;
  green_fleet_provisioning_option: GreenFleetProvisioningOption;
  terminate_blue_instances_on_deployment_success: TerminateBlueInstancesOnDeploymentSuccess;
}
export interface DeploymentStyle {
  deployment_option?: string;
  deployment_type?: string;
}
export interface Ec2TagFilter {
  key?: string;
  type?: string;
  value?: string;
}
export interface Ec2TagFilter {
  key?: string;
  type?: string;
  value?: string;
}
export interface Ec2TagSet {
  ec2_tag_filter: Ec2TagFilter;
}
export interface EcsService {
  cluster_name: string;
  service_name: string;
}
export interface ElbInfo {
  name?: string;
}
export interface TargetGroupInfo {
  name?: string;
}
export interface ProdTrafficRoute {
  listener_arns: string[];
}
export interface TargetGroup {
  name: string;
}
export interface TestTrafficRoute {
  listener_arns: string[];
}
export interface TargetGroupPairInfo {
  prod_traffic_route: ProdTrafficRoute;
  target_group: TargetGroup;
  test_traffic_route: TestTrafficRoute;
}
export interface LoadBalancerInfo {
  elb_info: ElbInfo;
  target_group_info: TargetGroupInfo;
  target_group_pair_info: TargetGroupPairInfo;
}
export interface OnPremisesInstanceTagFilter {
  key?: string;
  type?: string;
  value?: string;
}
export interface TriggerConfiguration {
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
  alarm_configuration: AlarmConfiguration;
  auto_rollback_configuration: AutoRollbackConfiguration;
  blue_green_deployment_config: BlueGreenDeploymentConfig;
  deployment_style: DeploymentStyle;
  ec2_tag_filter: Ec2TagFilter;
  ec2_tag_set: Ec2TagSet;
  ecs_service: EcsService;
  load_balancer_info: LoadBalancerInfo;
  on_premises_instance_tag_filter: OnPremisesInstanceTagFilter;
  trigger_configuration: TriggerConfiguration;
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