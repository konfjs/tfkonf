import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappVolumeReplicationArgsDestinationVolumeParameters {
  description?: string;
  storage_pool: string;
}

export interface GoogleNetappVolumeReplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappVolumeReplicationArgs {
  delete_destination_volume?: boolean;
  description?: string;
  force_stopping?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  replication_enabled?: boolean;
  replication_schedule: string;
  volume_name: string;
  wait_for_mirror?: boolean;
  destination_volume_parameters: GoogleNetappVolumeReplicationArgsDestinationVolumeParameters;
  timeouts?: GoogleNetappVolumeReplicationArgsTimeouts;
}

export class google_netapp_volume_replication extends TerraformResource {
  readonly create_time!: string;
  readonly destination_volume!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly healthy!: boolean;
  readonly id?: string;
  readonly mirror_state!: string;
  readonly project?: string;
  readonly role!: string;
  readonly source_volume!: string;
  readonly state!: string;
  readonly state_details!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly transfer_stats!: any[];

  constructor(config: TerraformConfig, resourceName: string, args: GoogleNetappVolumeReplicationArgs) {
    super(config, "resource", args, resourceName, "google_netapp_volume_replication");
  }
}
