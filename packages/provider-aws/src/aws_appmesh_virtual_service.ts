import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppmeshVirtualServiceArgsSpecProviderVirtualNode {
  virtual_node_name: string;
}
export interface AwsAppmeshVirtualServiceArgsSpecProviderVirtualRouter {
  virtual_router_name: string;
}
export interface AwsAppmeshVirtualServiceArgsSpecProvider {
  virtual_node: AwsAppmeshVirtualServiceArgsSpecProviderVirtualNode;
  virtual_router: AwsAppmeshVirtualServiceArgsSpecProviderVirtualRouter;
}
export interface AwsAppmeshVirtualServiceArgsSpec {
  provider: AwsAppmeshVirtualServiceArgsSpecProvider;
}
export interface AwsAppmeshVirtualServiceArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshVirtualServiceArgsSpec;
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