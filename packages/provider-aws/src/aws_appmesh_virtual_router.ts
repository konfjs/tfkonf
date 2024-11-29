import { TerraformConfig, TerraformResource } from "tfs";
export interface PortMapping {
  port: number;
  protocol: string;
}
export interface Listener {
  port_mapping: PortMapping;
}
export interface Spec {
  listener: Listener;
}
export interface AwsAppmeshVirtualRouterArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: Spec;
}
export class aws_appmesh_virtual_router extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner?: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualRouterArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_virtual_router");
  }
}