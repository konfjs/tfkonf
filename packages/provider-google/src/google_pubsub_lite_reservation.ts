import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubLiteReservationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubLiteReservationArgs {
  name: string;
  region?: string;
  throughput_capacity: number;
  timeouts: GooglePubsubLiteReservationArgstimeouts;
}
export class google_pubsub_lite_reservation extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubLiteReservationArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_lite_reservation");
  }
}