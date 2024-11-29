import { TerraformConfig, TerraformResource } from "tfs";
export interface Source {
  regions: string[];
  source_name: string;
}
export interface AwsSecuritylakeAwsLogSourceArgs {
  source: Source;
}
export class aws_securitylake_aws_log_source extends TerraformResource {
  readonly id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecuritylakeAwsLogSourceArgs) {
    super(config, "resource", args, resourceName, "aws_securitylake_aws_log_source");
  }
}