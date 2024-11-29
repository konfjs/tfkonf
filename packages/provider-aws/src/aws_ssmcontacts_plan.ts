import { TerraformConfig, TerraformResource } from "tfs";
export interface ChannelTargetInfo {
  contact_channel_id: string;
  retry_interval_in_minutes?: number;
}
export interface ContactTargetInfo {
  contact_id?: string;
  is_essential: boolean;
}
export interface Target {
  channel_target_info: ChannelTargetInfo;
  contact_target_info: ContactTargetInfo;
}
export interface Stage {
  duration_in_minutes: number;
  target: Target;
}
export interface AwsSsmcontactsPlanArgs {
  contact_id: string;
  stage: Stage;
}
export class aws_ssmcontacts_plan extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmcontactsPlanArgs) {
    super(config, "resource", args, resourceName, "aws_ssmcontacts_plan");
  }
}