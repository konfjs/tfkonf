import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryCapacityCommitmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryCapacityCommitmentArgs {
  capacity_commitment_id?: string;
  edition?: string;
  enforce_single_admin_project_per_org?: string;
  location?: string;
  plan: string;
  renewal_plan?: string;
  slot_count: number;
  timeouts?: GoogleBigqueryCapacityCommitmentArgsTimeouts;
}

export class google_bigquery_capacity_commitment extends TerraformResource {
  readonly commitment_end_time!: string;
  readonly commitment_start_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryCapacityCommitmentArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_capacity_commitment");
  }
}
