import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsRedshiftserverlessEndpointAccessArgs {
  endpoint_name: string;
  owner_account?: string;
  subnet_ids: string[];
  workgroup_name: string;
}
export class aws_redshiftserverless_endpoint_access extends TerraformResource {
  readonly address!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly port!: number;
  readonly vpc_endpoint!: any[];
  readonly vpc_security_group_ids?: string[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftserverlessEndpointAccessArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftserverless_endpoint_access");
  }
}