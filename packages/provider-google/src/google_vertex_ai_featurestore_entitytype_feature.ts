import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleVertexAiFeaturestoreEntitytypeFeatureArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiFeaturestoreEntitytypeFeatureArgs {
  description?: string;
  entitytype: string;
  labels?: {
    [key: string]: string;
  };
  name?: string;
  value_type: string;
  timeouts?: GoogleVertexAiFeaturestoreEntitytypeFeatureArgsTimeouts;
}
export class google_vertex_ai_featurestore_entitytype_feature extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly region!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeaturestoreEntitytypeFeatureArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_featurestore_entitytype_feature");
  }
}