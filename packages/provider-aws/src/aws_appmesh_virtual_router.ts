import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppmeshVirtualRouterArgsSpecListenerPortMapping {
  port: number;
  protocol: string;
}
export interface AwsAppmeshVirtualRouterArgsSpecListener {
  port_mapping: AwsAppmeshVirtualRouterArgsSpecListenerPortMapping;
}
export interface AwsAppmeshVirtualRouterArgsSpec {
  listener: AwsAppmeshVirtualRouterArgsSpecListener;
}
export interface AwsAppmeshVirtualRouterArgs {
  mesh_name: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  spec: AwsAppmeshVirtualRouterArgsSpec;
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