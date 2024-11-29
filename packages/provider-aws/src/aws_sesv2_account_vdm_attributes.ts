import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSesv2AccountVdmAttributesArgsDashboardAttributes {
  engagement_metrics?: string;
}
export interface AwsSesv2AccountVdmAttributesArgsGuardianAttributes {
  optimized_shared_delivery?: string;
}
export interface AwsSesv2AccountVdmAttributesArgs {
  vdm_enabled: string;
  dashboard_attributes: AwsSesv2AccountVdmAttributesArgsDashboardAttributes;
  guardian_attributes: AwsSesv2AccountVdmAttributesArgsGuardianAttributes;
}
export class aws_sesv2_account_vdm_attributes extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2AccountVdmAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_account_vdm_attributes");
  }
}