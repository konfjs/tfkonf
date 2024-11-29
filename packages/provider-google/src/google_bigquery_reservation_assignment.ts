import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleBigqueryReservationAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface GoogleBigqueryReservationAssignmentArgs {
  assignee: string;
  job_type: string;
  reservation: string;
  timeouts?: GoogleBigqueryReservationAssignmentArgsTimeouts;
}
export class google_bigquery_reservation_assignment extends TerraformResource {
  readonly id?: string;
  readonly location?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryReservationAssignmentArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_reservation_assignment");
  }
}