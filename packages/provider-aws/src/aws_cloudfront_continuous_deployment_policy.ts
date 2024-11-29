import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudfrontContinuousDeploymentPolicyArgsStagingDistributionDnsNames {
  items?: string[];
  quantity: number;
}
export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleHeaderConfig {
  header: string;
  value: string;
}
export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfigSessionStickinessConfig {
  idle_ttl: number;
  maximum_ttl: number;
}
export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfig {
  weight: number;
  session_stickiness_config: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfigSessionStickinessConfig;
}
export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfig {
  type: string;
  single_header_config: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleHeaderConfig;
  single_weight_config: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfig;
}
export interface AwsCloudfrontContinuousDeploymentPolicyArgs {
  enabled: boolean;
  staging_distribution_dns_names: AwsCloudfrontContinuousDeploymentPolicyArgsStagingDistributionDnsNames;
  traffic_config: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfig;
}
export class aws_cloudfront_continuous_deployment_policy extends TerraformResource {
  readonly etag!: string;
  readonly id!: string;
  readonly last_modified_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontContinuousDeploymentPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_continuous_deployment_policy");
  }
}