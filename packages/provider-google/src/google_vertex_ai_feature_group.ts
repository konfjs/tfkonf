import { TerraformConfig, TerraformResource } from "tfs";
export interface BigQuerySource {
  input_uri: string;
}
export interface BigQuery {
  entity_id_columns?: string[];
  big_query_source: BigQuerySource;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiFeatureGroupArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name?: string;
  region?: string;
  big_query: BigQuery;
  timeouts: Timeouts;
}
export class google_vertex_ai_feature_group extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeatureGroupArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_feature_group");
  }
}