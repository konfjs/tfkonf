import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppmeshMeshArgsSpecEgressFilter {
  type?: string;
}
export interface AwsAppmeshMeshArgsSpecServiceDiscovery {
  ip_preference?: string;
}
export interface AwsAppmeshMeshArgsSpec {
  egress_filter: AwsAppmeshMeshArgsSpecEgressFilter;
  service_discovery: AwsAppmeshMeshArgsSpecServiceDiscovery;
}
export interface AwsAppmeshMeshArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshMeshArgsSpec;
}
export class aws_appmesh_mesh extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner!: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshMeshArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_mesh");
  }
}