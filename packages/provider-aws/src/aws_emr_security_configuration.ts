import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsEmrSecurityConfigurationArgs {
  configuration: string;
}
export class aws_emr_security_configuration extends TerraformResource {
  readonly creation_date!: string;
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrSecurityConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_emr_security_configuration");
  }
}