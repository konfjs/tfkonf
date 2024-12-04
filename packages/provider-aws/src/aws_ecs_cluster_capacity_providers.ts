import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEcsClusterCapacityProvidersArgsDefaultCapacityProviderStrategy {
  base?: number;
  capacity_provider: string;
  weight?: number;
}

export interface AwsEcsClusterCapacityProvidersArgs {
  capacity_providers?: string[];
  cluster_name: string;
  default_capacity_provider_strategy: AwsEcsClusterCapacityProvidersArgsDefaultCapacityProviderStrategy;
}

export class aws_ecs_cluster_capacity_providers extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsEcsClusterCapacityProvidersArgs) {
    super(config, "resource", args, resourceName, "aws_ecs_cluster_capacity_providers");
  }
}
