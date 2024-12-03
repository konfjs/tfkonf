import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftEndpointAuthorizationArgs {
  account: string;
  cluster_identifier: string;
  force_delete?: boolean;
  vpc_ids?: string[];
}
export class aws_redshift_endpoint_authorization extends TerraformResource {
  readonly allowed_all_vpcs!: boolean;
  readonly endpoint_count!: number;
  readonly grantee!: string;
  readonly grantor!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftEndpointAuthorizationArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_endpoint_authorization");
  }
}