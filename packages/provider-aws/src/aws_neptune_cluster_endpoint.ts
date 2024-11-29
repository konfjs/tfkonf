import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsNeptuneClusterEndpointArgs {
  cluster_endpoint_identifier: string;
  cluster_identifier: string;
  endpoint_type: string;
  excluded_members?: string[];
  static_members?: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_neptune_cluster_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsNeptuneClusterEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_neptune_cluster_endpoint");
  }
}