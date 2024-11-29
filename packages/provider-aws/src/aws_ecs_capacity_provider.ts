import { TerraformConfig, TerraformResource } from "tfs";
export interface ManagedScaling {}
export interface AutoScalingGroupProvider {
  auto_scaling_group_arn: string;
  managed_scaling: ManagedScaling;
}
export interface AwsEcsCapacityProviderArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  auto_scaling_group_provider: AutoScalingGroupProvider;
}
export class aws_ecs_capacity_provider extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsCapacityProviderArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_capacity_provider");
  }
}