import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeResourcePolicyArgsDiskConsistencyGroupPolicy {
  enabled: boolean;
}

export interface GoogleComputeResourcePolicyArgsGroupPlacementPolicy {
  availability_domain_count?: number;
  collocation?: string;
  vm_count?: number;
}

export interface GoogleComputeResourcePolicyArgsInstanceSchedulePolicyVmStartSchedule {
  schedule: string;
}

export interface GoogleComputeResourcePolicyArgsInstanceSchedulePolicyVmStopSchedule {
  schedule: string;
}

export interface GoogleComputeResourcePolicyArgsInstanceSchedulePolicy {
  expiration_time?: string;
  start_time?: string;
  time_zone: string;
  vm_start_schedule: GoogleComputeResourcePolicyArgsInstanceSchedulePolicyVmStartSchedule;
  vm_stop_schedule: GoogleComputeResourcePolicyArgsInstanceSchedulePolicyVmStopSchedule;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyRetentionPolicy {
  max_retention_days: number;
  on_source_disk_delete?: string;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleDailySchedule {
  days_in_cycle: number;
  start_time: string;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleHourlySchedule {
  hours_in_cycle: number;
  start_time: string;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks {
  day: string;
  start_time: string;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleWeeklySchedule {
  day_of_weeks: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicySchedule {
  daily_schedule: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleDailySchedule;
  hourly_schedule: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleHourlySchedule;
  weekly_schedule: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyScheduleWeeklySchedule;
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicySnapshotProperties {
  chain_name?: string;
  guest_flush?: boolean;
  labels?: { [key: string]: string };
  storage_locations?: string[];
}

export interface GoogleComputeResourcePolicyArgsSnapshotSchedulePolicy {
  retention_policy: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicyRetentionPolicy;
  schedule: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicySchedule;
  snapshot_properties: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicySnapshotProperties;
}

export interface GoogleComputeResourcePolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeResourcePolicyArgs {
  description?: string;
  name: string;
  disk_consistency_group_policy: GoogleComputeResourcePolicyArgsDiskConsistencyGroupPolicy;
  group_placement_policy: GoogleComputeResourcePolicyArgsGroupPlacementPolicy;
  instance_schedule_policy: GoogleComputeResourcePolicyArgsInstanceSchedulePolicy;
  snapshot_schedule_policy: GoogleComputeResourcePolicyArgsSnapshotSchedulePolicy;
  timeouts?: GoogleComputeResourcePolicyArgsTimeouts;
}

export class google_compute_resource_policy extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "google_compute_resource_policy");
  }
}
