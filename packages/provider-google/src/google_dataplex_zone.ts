import { TerraformConfig, TerraformResource } from "tfs";
export interface CsvOptions {
  delimiter?: string;
  disable_type_inference?: boolean;
  encoding?: string;
  header_rows?: number;
}
export interface JsonOptions {
  disable_type_inference?: boolean;
  encoding?: string;
}
export interface DiscoverySpec {
  enabled: boolean;
  exclude_patterns?: string[];
  include_patterns?: string[];
  csv_options: CsvOptions;
  json_options: JsonOptions;
}
export interface ResourceSpec {
  location_type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexZoneArgs {
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  lake: string;
  location: string;
  name: string;
  type: string;
  discovery_spec: DiscoverySpec;
  resource_spec: ResourceSpec;
  timeouts: Timeouts;
}
export class google_dataplex_zone extends TerraformResource {
  readonly asset_status!: any[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexZoneArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_zone");
  }
}