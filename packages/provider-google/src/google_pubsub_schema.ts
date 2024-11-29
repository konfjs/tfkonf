import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubSchemaArgs {
  definition?: string;
  name: string;
  type?: string;
  timeouts: Timeouts;
}
export class google_pubsub_schema extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema");
  }
}