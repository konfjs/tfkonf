import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreFederationArgsBackendMetastores {
  metastore_type: string;
  name: string;
  rank: string;
}

export interface GoogleDataprocMetastoreFederationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataprocMetastoreFederationArgs {
  federation_id: string;
  labels?: { [key: string]: string };
  location?: string;
  version: string;
  backend_metastores: GoogleDataprocMetastoreFederationArgsBackendMetastores;
  timeouts?: GoogleDataprocMetastoreFederationArgsTimeouts;
}

export class google_dataproc_metastore_federation extends TerraformResource {
  readonly effective_labels!: { [key: string]: string };
  readonly endpoint_uri!: string;
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;
  readonly state_message!: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly uid!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreFederationArgs) {
    super(config, "resource", args, resourceName, "google_dataproc_metastore_federation");
  }
}
