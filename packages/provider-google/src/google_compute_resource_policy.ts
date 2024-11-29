import { TerraformConfig, TerraformResource } from "tfs";
export interface DiskConsistencyGroupPolicy {
  enabled: boolean;
}
export interface GroupPlacementPolicy {
  availability_domain_count?: number;
  collocation?: string;
  vm_count?: number;
}
export interface VmStartSchedule {
  schedule: string;
}
export interface VmStopSchedule {
  schedule: string;
}
export interface InstanceSchedulePolicy {
  expiration_time?: string;
  start_time?: string;
  time_zone: string;
  vm_start_schedule: VmStartSchedule;
  vm_stop_schedule: VmStopSchedule;
}
export interface RetentionPolicy {
  max_retention_days: number;
  on_source_disk_delete?: string;
}
export interface DailySchedule {
  days_in_cycle: number;
  start_time: string;
}
export interface HourlySchedule {
  hours_in_cycle: number;
  start_time: string;
}
export interface DayOfWeeks {
  day: string;
  start_time: string;
}
export interface WeeklySchedule {
  day_of_weeks: DayOfWeeks;
}
export interface Schedule {
  daily_schedule: DailySchedule;
  hourly_schedule: HourlySchedule;
  weekly_schedule: WeeklySchedule;
}
export interface SnapshotProperties {
  chain_name?: string;
  guest_flush?: boolean;
  labels?: {
    [key: string]: string;
  };
  storage_locations?: string[];
}
export interface SnapshotSchedulePolicy {
  retention_policy: RetentionPolicy;
  schedule: Schedule;
  snapshot_properties: SnapshotProperties;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeResourcePolicyArgs {
  description?: string;
  name: string;
  disk_consistency_group_policy: DiskConsistencyGroupPolicy;
  group_placement_policy: GroupPlacementPolicy;
  instance_schedule_policy: InstanceSchedulePolicy;
  snapshot_schedule_policy: SnapshotSchedulePolicy;
  timeouts: Timeouts;
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