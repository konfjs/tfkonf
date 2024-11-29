import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOsConfigPatchDeploymentArgsInstanceFilterGroupLabels {
  labels: {
    [key: string]: string;
  };
}
export interface GoogleOsConfigPatchDeploymentArgsInstanceFilter {
  all?: boolean;
  instance_name_prefixes?: string[];
  instances?: string[];
  zones?: string[];
  group_labels: GoogleOsConfigPatchDeploymentArgsInstanceFilterGroupLabels;
}
export interface GoogleOsConfigPatchDeploymentArgsOneTimeSchedule {
  execute_time: string;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigapt {
  excludes?: string[];
  exclusive_packages?: string[];
  type?: string;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfiggoo {
  enabled: boolean;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfigGcsObject;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfigGcsObject;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPostStep {
  linux_exec_step_config: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepLinuxExecStepConfig;
  windows_exec_step_config: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStepWindowsExecStepConfig;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfigGcsObject;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfigGcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfigGcsObject;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigPreStep {
  linux_exec_step_config: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepLinuxExecStepConfig;
  windows_exec_step_config: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStepWindowsExecStepConfig;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigWindowsUpdate {
  classifications?: string[];
  excludes?: string[];
  exclusive_patches?: string[];
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigyum {
  excludes?: string[];
  exclusive_packages?: string[];
  minimal?: boolean;
  security?: boolean;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfigzypper {
  categories?: string[];
  excludes?: string[];
  exclusive_patches?: string[];
  severities?: string[];
  with_optional?: boolean;
  with_update?: boolean;
}
export interface GoogleOsConfigPatchDeploymentArgsPatchConfig {
  mig_instances_allowed?: boolean;
  reboot_config?: string;
  apt: GoogleOsConfigPatchDeploymentArgsPatchConfigapt;
  goo: GoogleOsConfigPatchDeploymentArgsPatchConfiggoo;
  post_step: GoogleOsConfigPatchDeploymentArgsPatchConfigPostStep;
  pre_step: GoogleOsConfigPatchDeploymentArgsPatchConfigPreStep;
  windows_update: GoogleOsConfigPatchDeploymentArgsPatchConfigWindowsUpdate;
  yum: GoogleOsConfigPatchDeploymentArgsPatchConfigyum;
  zypper: GoogleOsConfigPatchDeploymentArgsPatchConfigzypper;
}
export interface GoogleOsConfigPatchDeploymentArgsRecurringSchedulemonthlyWeekDayOfMonth {
  day_of_week: string;
  day_offset?: number;
  week_ordinal: number;
}
export interface GoogleOsConfigPatchDeploymentArgsRecurringSchedulemonthly {
  month_day?: number;
  week_day_of_month: GoogleOsConfigPatchDeploymentArgsRecurringSchedulemonthlyWeekDayOfMonth;
}
export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeOfDay {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeZone {
  id: string;
  version?: string;
}
export interface GoogleOsConfigPatchDeploymentArgsRecurringScheduleweekly {
  day_of_week: string;
}
export interface GoogleOsConfigPatchDeploymentArgsRecurringSchedule {
  end_time?: string;
  start_time?: string;
  monthly: GoogleOsConfigPatchDeploymentArgsRecurringSchedulemonthly;
  time_of_day: GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeOfDay;
  time_zone: GoogleOsConfigPatchDeploymentArgsRecurringScheduleTimeZone;
  weekly: GoogleOsConfigPatchDeploymentArgsRecurringScheduleweekly;
}
export interface GoogleOsConfigPatchDeploymentArgsrolloutDisruptionBudget {
  fixed?: number;
  percentage?: number;
}
export interface GoogleOsConfigPatchDeploymentArgsrollout {
  mode: string;
  disruption_budget: GoogleOsConfigPatchDeploymentArgsrolloutDisruptionBudget;
}
export interface GoogleOsConfigPatchDeploymentArgstimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleOsConfigPatchDeploymentArgs {
  description?: string;
  duration?: string;
  patch_deployment_id: string;
  instance_filter: GoogleOsConfigPatchDeploymentArgsInstanceFilter;
  one_time_schedule: GoogleOsConfigPatchDeploymentArgsOneTimeSchedule;
  patch_config: GoogleOsConfigPatchDeploymentArgsPatchConfig;
  recurring_schedule: GoogleOsConfigPatchDeploymentArgsRecurringSchedule;
  rollout: GoogleOsConfigPatchDeploymentArgsrollout;
  timeouts: GoogleOsConfigPatchDeploymentArgstimeouts;
}
export class google_os_config_patch_deployment extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly last_execute_time!: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOsConfigPatchDeploymentArgs) {
    super(config, "resource", args, resourceName, "google_os_config_patch_deployment");
  }
}