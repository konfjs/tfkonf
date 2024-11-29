import { TerraformConfig, TerraformResource } from "tfs";
export interface VirtualNode {
  virtual_node_name: string;
}
export interface VirtualRouter {
  virtual_router_name: string;
}
export interface Provider {
  virtual_node: VirtualNode;
  virtual_router: VirtualRouter;
}
export interface Spec {
  provider: Provider;
}
export interface AwsAppmeshVirtualServiceArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: Spec;
}
export class aws_appmesh_virtual_service extends TerraformResource {
  readonly arn!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly mesh_owner?: string;
  readonly resource_owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppmeshVirtualServiceArgs) {
    super(config, "resource", args, resourceName, "aws_appmesh_virtual_service");
  }
}