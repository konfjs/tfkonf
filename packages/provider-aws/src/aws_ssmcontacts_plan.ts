import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmcontactsPlanArgsStageTargetChannelTargetInfo {
  contact_channel_id: string;
  retry_interval_in_minutes?: number;
}
export interface AwsSsmcontactsPlanArgsStageTargetContactTargetInfo {
  contact_id?: string;
  is_essential: boolean;
}
export interface AwsSsmcontactsPlanArgsStageTarget {
  channel_target_info: AwsSsmcontactsPlanArgsStageTargetChannelTargetInfo;
  contact_target_info: AwsSsmcontactsPlanArgsStageTargetContactTargetInfo;
}
export interface AwsSsmcontactsPlanArgsStage {
  duration_in_minutes: number;
  target: AwsSsmcontactsPlanArgsStageTarget;
}
export interface AwsSsmcontactsPlanArgs {
  contact_id: string;
  stage: AwsSsmcontactsPlanArgsStage;
}
export class aws_ssmcontacts_plan extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmcontactsPlanArgs) {
    super(config, "resource", args, resourceName, "aws_ssmcontacts_plan");
  }
}