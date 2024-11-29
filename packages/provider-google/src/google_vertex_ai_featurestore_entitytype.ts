import { TerraformConfig, TerraformResource } from "tfs";
export interface CategoricalThresholdConfig {
  value: number;
}
export interface ImportFeaturesAnalysis {
  anomaly_detection_baseline?: string;
  state?: string;
}
export interface NumericalThresholdConfig {
  value: number;
}
export interface SnapshotAnalysis {
  disabled?: boolean;
  monitoring_interval_days?: number;
  staleness_days?: number;
}
export interface MonitoringConfig {
  categorical_threshold_config: CategoricalThresholdConfig;
  import_features_analysis: ImportFeaturesAnalysis;
  numerical_threshold_config: NumericalThresholdConfig;
  snapshot_analysis: SnapshotAnalysis;
}
export interface Timeouts {
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
  monitoring_config: MonitoringConfig;
  timeouts: Timeouts;
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