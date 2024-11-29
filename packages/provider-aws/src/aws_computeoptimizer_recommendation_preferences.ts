import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsComputeoptimizerRecommendationPreferencesArgsExternalMetricsPreference {
  source: string;
}
export interface AwsComputeoptimizerRecommendationPreferencesArgsPreferredResource {
  exclude_list?: string[];
  include_list?: string[];
  name: string;
}
export interface AwsComputeoptimizerRecommendationPreferencesArgsscope {
  name: string;
  value: string;
}
export interface AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreferenceMetricParameters {
  headroom: string;
  threshold?: string;
}
export interface AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreference {
  metric_name: string;
  metric_parameters: AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreferenceMetricParameters;
}
export interface AwsComputeoptimizerRecommendationPreferencesArgs {
  enhanced_infrastructure_metrics?: string;
  inferred_workload_types?: string;
  resource_type: string;
  savings_estimation_mode?: string;
  external_metrics_preference: AwsComputeoptimizerRecommendationPreferencesArgsExternalMetricsPreference;
  preferred_resource: AwsComputeoptimizerRecommendationPreferencesArgsPreferredResource;
  scope: AwsComputeoptimizerRecommendationPreferencesArgsscope;
  utilization_preference: AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreference;
}
export class aws_computeoptimizer_recommendation_preferences extends TerraformResource {
  readonly id!: string;
  readonly look_back_period?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsComputeoptimizerRecommendationPreferencesArgs) {
    super(config, "resource", args, resourceName, "aws_computeoptimizer_recommendation_preferences");
  }
}