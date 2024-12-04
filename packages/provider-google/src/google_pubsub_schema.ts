import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePubsubSchemaArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePubsubSchemaArgs {
  definition?: string;
  name: string;
  type?: string;
  timeouts?: GooglePubsubSchemaArgsTimeouts;
}

export class google_pubsub_schema extends TerraformResource {
  readonly id?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GooglePubsubSchemaArgs) {
    super(config, "resource", args, resourceName, "google_pubsub_schema");
  }
}
