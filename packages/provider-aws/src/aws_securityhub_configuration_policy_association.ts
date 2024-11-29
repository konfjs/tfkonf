import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecurityhubConfigurationPolicyAssociationArgstimeouts {
  create?: string;
  update?: string;
}
export interface AwsSecurityhubConfigurationPolicyAssociationArgs {
  policy_id: string;
  target_id: string;
  timeouts: AwsSecurityhubConfigurationPolicyAssociationArgstimeouts;
}
export class aws_securityhub_configuration_policy_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubConfigurationPolicyAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_configuration_policy_association");
  }
}