import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftEndpointAccessArgs {
  cluster_identifier: string;
  endpoint_name: string;
  subnet_group_name: string;
}

export class aws_redshift_endpoint_access extends TerraformResource {
  readonly address!: string;
  readonly id?: string;
  readonly port!: number;
  readonly resource_owner?: string;
  readonly vpc_endpoint!: any[];
  readonly vpc_security_group_ids?: string[];

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftEndpointAccessArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_endpoint_access");
  }
}
