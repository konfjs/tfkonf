import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRdsClusterEndpointArgs {
  cluster_endpoint_identifier: string;
  cluster_identifier: string;
  custom_endpoint_type: string;
  excluded_members?: string[];
  static_members?: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_rds_cluster_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsClusterEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_rds_cluster_endpoint");
  }
}