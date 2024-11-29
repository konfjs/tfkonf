import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleComputeReservationArgsShareSettingsProjectMap {
  id: string;
  project_id?: string;
}
export interface GoogleComputeReservationArgsShareSettings {
  project_map: GoogleComputeReservationArgsShareSettingsProjectMap;
}
export interface GoogleComputeReservationArgsSpecificReservationInstancePropertiesGuestAccelerators {
  accelerator_count: number;
  accelerator_type: string;
}
export interface GoogleComputeReservationArgsSpecificReservationInstancePropertiesLocalSsds {
  disk_size_gb: number;
  interface?: string;
}
export interface GoogleComputeReservationArgsSpecificReservationInstanceProperties {
  machine_type: string;
  guest_accelerators: GoogleComputeReservationArgsSpecificReservationInstancePropertiesGuestAccelerators;
  local_ssds: GoogleComputeReservationArgsSpecificReservationInstancePropertiesLocalSsds;
}
export interface GoogleComputeReservationArgsSpecificReservation {
  count: number;
  instance_properties: GoogleComputeReservationArgsSpecificReservationInstanceProperties;
}
export interface GoogleComputeReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleComputeReservationArgs {
  description?: string;
  name: string;
  specific_reservation_required?: boolean;
  zone: string;
  share_settings: GoogleComputeReservationArgsShareSettings;
  specific_reservation: GoogleComputeReservationArgsSpecificReservation;
  timeouts?: GoogleComputeReservationArgsTimeouts;
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