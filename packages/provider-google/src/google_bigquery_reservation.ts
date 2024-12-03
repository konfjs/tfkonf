import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleBigqueryReservationArgsAutoscale {
  max_slots?: number;
}
export interface GoogleBigqueryReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBigqueryReservationArgs {
  concurrency?: number;
  ignore_idle_slots?: boolean;
  location?: string;
  name: string;
  slot_capacity: number;
  autoscale: GoogleBigqueryReservationArgsAutoscale;
  timeouts?: GoogleBigqueryReservationArgsTimeouts;
}
export class google_bigquery_reservation extends TerraformResource {
  readonly edition?: string;
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryReservationArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_reservation");
  }
}