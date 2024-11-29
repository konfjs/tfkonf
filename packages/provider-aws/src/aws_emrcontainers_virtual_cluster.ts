import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrcontainersVirtualClusterArgsContainerProviderInfoEksInfo {
  namespace?: string;
}
export interface AwsEmrcontainersVirtualClusterArgsContainerProviderInfo {
  eks_info: AwsEmrcontainersVirtualClusterArgsContainerProviderInfoEksInfo;
}
export interface AwsEmrcontainersVirtualClusterArgsContainerProvider {
  id: string;
  type: string;
  info: AwsEmrcontainersVirtualClusterArgsContainerProviderInfo;
}
export interface AwsEmrcontainersVirtualClusterArgsTimeouts {
  delete?: string;
}
export interface AwsEmrcontainersVirtualClusterArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  container_provider: AwsEmrcontainersVirtualClusterArgsContainerProvider;
  timeouts: AwsEmrcontainersVirtualClusterArgsTimeouts;
}
export class aws_emrcontainers_virtual_cluster extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrcontainersVirtualClusterArgs) {
    super(config, "resource", args, resourceName, "aws_emrcontainers_virtual_cluster");
  }
}