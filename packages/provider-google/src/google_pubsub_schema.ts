import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePubsubSchemaArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePubsubSchemaArgs {
  definition?: string;
  name: string;
  type?: string;
  timeouts: GooglePubsubSchemaArgstimeouts;
}
export class google_pubsub_schema extends TerraformResource {
  readonly id?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema");
  }
}