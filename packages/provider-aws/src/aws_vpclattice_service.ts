import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsVpclatticeServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsVpclatticeServiceArgs {
  certificate_arn?: string;
  custom_domain_name?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts?: AwsVpclatticeServiceArgsTimeouts;
}
export class aws_vpclattice_service extends TerraformResource {
  readonly arn!: string;
  readonly auth_type?: string;
  readonly dns_entry!: any[];
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsVpclatticeServiceArgs) {
    super(config, "resource", args, resourceName, "aws_vpclattice_service");
  }
}