import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEmrBlockPublicAccessConfigurationArgsPermittedPublicSecurityGroupRuleRange {
  max_range: number;
  min_range: number;
}
export interface AwsEmrBlockPublicAccessConfigurationArgs {
  block_public_security_group_rules: boolean;
  permitted_public_security_group_rule_range: AwsEmrBlockPublicAccessConfigurationArgsPermittedPublicSecurityGroupRuleRange;
}
export class aws_emr_block_public_access_configuration extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEmrBlockPublicAccessConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_emr_block_public_access_configuration");
  }
}