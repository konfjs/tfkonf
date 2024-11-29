import { TerraformConfig, TerraformResource } from "tfs";
export interface ProjectMap {
  id: string;
  project_id?: string;
}
export interface ShareSettings {
  project_map: ProjectMap;
}
export interface GuestAccelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface LocalSsds {
  disk_size_gb: number;
  interface?: string;
}
export interface InstanceProperties {
  machine_type: string;
  guest_accelerators: GuestAccelerators;
  local_ssds: LocalSsds;
}
export interface SpecificReservation {
  count: number;
  instance_properties: InstanceProperties;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeReservationArgs {
  description?: string;
  name: string;
  specific_reservation_required?: boolean;
  zone: string;
  share_settings: ShareSettings;
  specific_reservation: SpecificReservation;
  timeouts: Timeouts;
}
export class google_compute_reservation extends TerraformResource {
  readonly commitment!: string;
  readonly creation_timestamp!: string;
  readonly id?: string;
  readonly project?: string;
  readonly self_link!: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeReservationArgs) {
    super(config, "resource", args, resourceName, "google_compute_reservation");
  }
}