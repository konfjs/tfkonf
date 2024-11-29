import { TerraformConfig, TerraformResource } from "tfs";
export interface GroupLabels {
  labels: {
    [key: string]: string;
  };
}
export interface InstanceFilter {
  all?: boolean;
  instance_name_prefixes?: string[];
  instances?: string[];
  zones?: string[];
  group_labels: GroupLabels;
}
export interface OneTimeSchedule {
  execute_time: string;
}
export interface Apt {
  excludes?: string[];
  exclusive_packages?: string[];
  type?: string;
}
export interface Goo {
  enabled: boolean;
}
export interface GcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface LinuxExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GcsObject;
}
export interface GcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface WindowsExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GcsObject;
}
export interface PostStep {
  linux_exec_step_config: LinuxExecStepConfig;
  windows_exec_step_config: WindowsExecStepConfig;
}
export interface GcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface LinuxExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GcsObject;
}
export interface GcsObject {
  bucket: string;
  generation_number: string;
  object: string;
}
export interface WindowsExecStepConfig {
  allowed_success_codes?: number[];
  interpreter?: string;
  local_path?: string;
  gcs_object: GcsObject;
}
export interface PreStep {
  linux_exec_step_config: LinuxExecStepConfig;
  windows_exec_step_config: WindowsExecStepConfig;
}
export interface WindowsUpdate {
  classifications?: string[];
  excludes?: string[];
  exclusive_patches?: string[];
}
export interface Yum {
  excludes?: string[];
  exclusive_packages?: string[];
  minimal?: boolean;
  security?: boolean;
}
export interface Zypper {
  categories?: string[];
  excludes?: string[];
  exclusive_patches?: string[];
  severities?: string[];
  with_optional?: boolean;
  with_update?: boolean;
}
export interface PatchConfig {
  mig_instances_allowed?: boolean;
  reboot_config?: string;
  apt: Apt;
  goo: Goo;
  post_step: PostStep;
  pre_step: PreStep;
  windows_update: WindowsUpdate;
  yum: Yum;
  zypper: Zypper;
}
export interface WeekDayOfMonth {
  day_of_week: string;
  day_offset?: number;
  week_ordinal: number;
}
export interface Monthly {
  month_day?: number;
  week_day_of_month: WeekDayOfMonth;
}
export interface TimeOfDay {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface TimeZone {
  id: string;
  version?: string;
}
export interface Weekly {
  day_of_week: string;
}
export interface RecurringSchedule {
  end_time?: string;
  start_time?: string;
  monthly: Monthly;
  time_of_day: TimeOfDay;
  time_zone: TimeZone;
  weekly: Weekly;
}
export interface DisruptionBudget {
  fixed?: number;
  percentage?: number;
}
export interface Rollout {
  mode: string;
  disruption_budget: DisruptionBudget;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface GoogleOsConfigPatchDeploymentArgs {
  description?: string;
  duration?: string;
  patch_deployment_id: string;
  instance_filter: InstanceFilter;
  one_time_schedule: OneTimeSchedule;
  patch_config: PatchConfig;
  recurring_schedule: RecurringSchedule;
  rollout: Rollout;
  timeouts: Timeouts;
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