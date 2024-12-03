import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsChimesdkvoiceSipRuleArgsTargetApplications {
  aws_region: string;
  priority: number;
  sip_media_application_id: string;
}
export interface AwsChimesdkvoiceSipRuleArgs {
  disabled?: boolean;
  name: string;
  trigger_type: string;
  trigger_value: string;
  target_applications: AwsChimesdkvoiceSipRuleArgsTargetApplications;
}
export class aws_chimesdkvoice_sip_rule extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsChimesdkvoiceSipRuleArgs) {
    super(config, "resource", args, resourceName, "aws_chimesdkvoice_sip_rule");
  }
}