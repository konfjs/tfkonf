import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigCategoricalThresholdConfig {
  value: number;
}
export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigImportFeaturesAnalysis {
  anomaly_detection_baseline?: string;
  state?: string;
}
export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigNumericalThresholdConfig {
  value: number;
}
export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigSnapshotAnalysis {
  disabled?: boolean;
  monitoring_interval_days?: number;
  staleness_days?: number;
}
export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfig {
  categorical_threshold_config: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigCategoricalThresholdConfig;
  import_features_analysis: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigImportFeaturesAnalysis;
  numerical_threshold_config: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigNumericalThresholdConfig;
  snapshot_analysis: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigSnapshotAnalysis;
}
export interface GoogleVertexAiFeaturestoreEntitytypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleVertexAiFeaturestoreEntitytypeArgs {
  description?: string;
  featurestore: string;
  labels?: {
    [key: string]: string;
  };
  name?: string;
  monitoring_config: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfig;
  timeouts: GoogleVertexAiFeaturestoreEntitytypeArgsTimeouts;
}
export class google_vertex_ai_featurestore_entitytype extends TerraformResource {
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleVertexAiFeaturestoreEntitytypeArgs) {
    super(config, "resource", args, resourceName, "google_vertex_ai_featurestore_entitytype");
  }
}