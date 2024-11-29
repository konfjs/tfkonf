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
  schedule?: string;
  csv_options: CsvOptions;
  json_options: JsonOptions;
}
export interface ResourceSpec {
  name?: string;
  type: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataplexAssetArgs {
  dataplex_zone: string;
  description?: string;
  display_name?: string;
  labels?: {
    [key: string]: string;
  };
  lake: string;
  location: string;
  name: string;
  discovery_spec: DiscoverySpec;
  resource_spec: ResourceSpec;
  timeouts: Timeouts;
}
export class google_dataplex_asset extends TerraformResource {
  readonly create_time!: string;
  readonly discovery_status!: any[];
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly resource_status!: any[];
  readonly security_status!: any[];
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexAssetArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_asset");
  }
}