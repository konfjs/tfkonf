import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsMskVpcConnectionArgs {
  authentication: string;
  client_subnets: string[];
  security_groups: string[];
  tags?: {
    [key: string]: string;
  };
  target_cluster_arn: string;
  vpc_id: string;
}
export class aws_msk_vpc_connection extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMskVpcConnectionArgs) {
    super(config, "resource", args, resourceName, "aws_msk_vpc_connection");
  }
}