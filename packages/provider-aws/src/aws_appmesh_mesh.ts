import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshMeshArgsspecEgressFilter {
  type?: string;
}
export interface AwsAppmeshMeshArgsspecServiceDiscovery {
  ip_preference?: string;
}
export interface AwsAppmeshMeshArgsspec {
  egress_filter: AwsAppmeshMeshArgsspecEgressFilter;
  service_discovery: AwsAppmeshMeshArgsspecServiceDiscovery;
}
export interface AwsAppmeshMeshArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshMeshArgsspec;
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