import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeRegionCommitmentArgsLicenseResource {
  amount?: string;
  cores_per_license?: string;
  license: string;
}

export interface GoogleComputeRegionCommitmentArgsResources {
  accelerator_type?: string;
  amount?: string;
  type?: string;
}

export interface GoogleComputeRegionCommitmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeRegionCommitmentArgs {
  description?: string;
  name: string;
  plan: string;
  license_resource: GoogleComputeRegionCommitmentArgsLicenseResource;
  resources: GoogleComputeRegionCommitmentArgsResources;
  timeouts?: GoogleComputeRegionCommitmentArgsTimeouts;
}

export class google_compute_region_commitment extends TerraformResource {
  readonly auto_renew?: boolean;
  readonly category?: string;
  readonly commitment_id!: number;
  readonly creation_timestamp!: string;
  readonly end_timestamp!: string;
  readonly existing_reservations?: string;
  readonly id?: string;
  readonly project?: string;
  readonly region?: string;
  readonly self_link!: string;
  readonly start_timestamp!: string;
  readonly status!: string;
  readonly status_message!: string;
  readonly type?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleComputeRegionCommitmentArgs) {
    super(config, "resource", args, resourceName, "google_compute_region_commitment");
  }
}
