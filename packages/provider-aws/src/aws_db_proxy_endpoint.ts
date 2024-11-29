import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDbProxyEndpointArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDbProxyEndpointArgs {
  db_proxy_endpoint_name: string;
  db_proxy_name: string;
  tags?: {
    [key: string]: string;
  };
  target_role?: string;
  vpc_subnet_ids: string[];
  timeouts: AwsDbProxyEndpointArgstimeouts;
}
export class aws_db_proxy_endpoint extends TerraformResource {
  readonly arn!: string;
  readonly endpoint!: string;
  readonly id?: string;
  readonly is_default!: boolean;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vpc_id!: string;
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsDbProxyEndpointArgs) {
    super(config, "resource", args, resourceName, "aws_db_proxy_endpoint");
  }
}