import { TerraformConfig, TerraformResource } from "tfs";
export interface ExternalMetricsPreference {
  source: string;
}
export interface PreferredResource {
  exclude_list?: string[];
  include_list?: string[];
  name: string;
}
export interface Scope {
  name: string;
  value: string;
}
export interface MetricParameters {
  headroom: string;
  threshold?: string;
}
export interface UtilizationPreference {
  metric_name: string;
  metric_parameters: MetricParameters;
}
export interface AwsComputeoptimizerRecommendationPreferencesArgs {
  enhanced_infrastructure_metrics?: string;
  inferred_workload_types?: string;
  resource_type: string;
  savings_estimation_mode?: string;
  external_metrics_preference: ExternalMetricsPreference;
  preferred_resource: PreferredResource;
  scope: Scope;
  utilization_preference: UtilizationPreference;
}
export class aws_computeoptimizer_recommendation_preferences extends TerraformResource {
  readonly id!: string;
  readonly look_back_period?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsComputeoptimizerRecommendationPreferencesArgs) {
    super(config, "resource", args, resourceName, "aws_computeoptimizer_recommendation_preferences");
  }
}