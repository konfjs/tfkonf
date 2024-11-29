import { TerraformConfig, TerraformResource } from "tfs";
export interface EgressFilter {
  type?: string;
}
export interface ServiceDiscovery {
  ip_preference?: string;
}
export interface Spec {
  egress_filter: EgressFilter;
  service_discovery: ServiceDiscovery;
}
export interface AwsAppmeshMeshArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: Spec;
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