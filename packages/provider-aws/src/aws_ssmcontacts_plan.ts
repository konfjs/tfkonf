import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmcontactsPlanArgsstagetargetChannelTargetInfo {
  contact_channel_id: string;
  retry_interval_in_minutes?: number;
}
export interface AwsSsmcontactsPlanArgsstagetargetContactTargetInfo {
  contact_id?: string;
  is_essential: boolean;
}
export interface AwsSsmcontactsPlanArgsstagetarget {
  channel_target_info: AwsSsmcontactsPlanArgsstagetargetChannelTargetInfo;
  contact_target_info: AwsSsmcontactsPlanArgsstagetargetContactTargetInfo;
}
export interface AwsSsmcontactsPlanArgsstage {
  duration_in_minutes: number;
  target: AwsSsmcontactsPlanArgsstagetarget;
}
export interface AwsSsmcontactsPlanArgs {
  contact_id: string;
  stage: AwsSsmcontactsPlanArgsstage;
}
export class aws_ssmcontacts_plan extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmcontactsPlanArgs) {
    super(config, "resource", args, resourceName, "aws_ssmcontacts_plan");
  }
}