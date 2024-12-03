import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEcsTaskSetArgsCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight: number;
}
export interface AwsEcsTaskSetArgsLoadBalancer {
  container_name: string;
  container_port?: number;
  load_balancer_name?: string;
  target_group_arn?: string;
}
export interface AwsEcsTaskSetArgsNetworkConfiguration {
  assign_public_ip?: boolean;
  security_groups?: string[];
  subnets: string[];
}
export interface AwsEcsTaskSetArgsScale {
  unit?: string;
  value?: number;
}
export interface AwsEcsTaskSetArgsServiceRegistries {
  container_name?: string;
  container_port?: number;
  port?: number;
  registry_arn: string;
}
export interface AwsEcsTaskSetArgs {
  cluster: string;
  force_delete?: boolean;
  service: string;
  tags?: {
    [key: string]: string;
  };
  task_definition: string;
  wait_until_stable?: boolean;
  wait_until_stable_timeout?: string;
  capacity_provider_strategy: AwsEcsTaskSetArgsCapacityProviderStrategy;
  load_balancer: AwsEcsTaskSetArgsLoadBalancer;
  network_configuration: AwsEcsTaskSetArgsNetworkConfiguration;
  scale: AwsEcsTaskSetArgsScale;
  service_registries: AwsEcsTaskSetArgsServiceRegistries;
}
export class aws_ecs_task_set extends TerraformResource {
  readonly arn!: string;
  readonly external_id?: string;
  readonly id?: string;
  readonly launch_type?: string;
  readonly platform_version?: string;
  readonly stability_status!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly task_set_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsTaskSetArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_task_set");
  }
}