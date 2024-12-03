import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigqueryBiReservationArgsPreferredTables {
  dataset_id?: string;
  project_id?: string;
  table_id?: string;
}
export interface GoogleBigqueryBiReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryBiReservationArgs {
  location: string;
  size?: number;
  preferred_tables: GoogleBigqueryBiReservationArgsPreferredTables;
  timeouts?: GoogleBigqueryBiReservationArgsTimeouts;
}
export class google_bigquery_bi_reservation extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryBiReservationArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_bi_reservation");
  }
}