import { TerraformConfig, TerraformResource } from "tfs";
export interface DashboardAttributes {
  engagement_metrics?: string;
}
export interface GuardianAttributes {
  optimized_shared_delivery?: string;
}
export interface AwsSesv2AccountVdmAttributesArgs {
  vdm_enabled: string;
  dashboard_attributes: DashboardAttributes;
  guardian_attributes: GuardianAttributes;
}
export class aws_sesv2_account_vdm_attributes extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSesv2AccountVdmAttributesArgs) {
    super(config, "resource", args, resourceName, "aws_sesv2_account_vdm_attributes");
  }
}