import { TerraformConfig, TerraformResource } from "tfs";
export interface EksInfo {
  namespace?: string;
}
export interface Info {
  eks_info: EksInfo;
}
export interface ContainerProvider {
  id: string;
  type: string;
  info: Info;
}
export interface Timeouts {
  delete?: string;
}
export interface AwsEmrcontainersVirtualClusterArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  container_provider: ContainerProvider;
  timeouts: Timeouts;
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