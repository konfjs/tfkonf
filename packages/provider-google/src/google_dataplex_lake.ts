import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDataplexLakeArgsMetastore {
  service?: string;
}
export interface GoogleDataplexLakeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexLakeArgs {
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  metastore: GoogleDataplexLakeArgsMetastore;
  timeouts: GoogleDataplexLakeArgsTimeouts;
}
export class google_dataplex_lake extends TerraformResource {
  readonly asset_status!: any[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly metastore_status!: any[];
  readonly project?: string;
  readonly service_account!: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexLakeArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_lake");
  }
}