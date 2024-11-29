import { TerraformConfig, TerraformResource } from "tfs";
export interface StagingDistributionDnsNames {
  items?: string[];
  quantity: number;
}
export interface SingleHeaderConfig {
  header: string;
  value: string;
}
export interface SessionStickinessConfig {
  idle_ttl: number;
  maximum_ttl: number;
}
export interface SingleWeightConfig {
  weight: number;
  session_stickiness_config: SessionStickinessConfig;
}
export interface TrafficConfig {
  type: string;
  single_header_config: SingleHeaderConfig;
  single_weight_config: SingleWeightConfig;
}
export interface AwsCloudfrontContinuousDeploymentPolicyArgs {
  enabled: boolean;
  staging_distribution_dns_names: StagingDistributionDnsNames;
  traffic_config: TrafficConfig;
}
export class aws_cloudfront_continuous_deployment_policy extends TerraformResource {
  readonly etag!: string;
  readonly id!: string;
  readonly last_modified_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontContinuousDeploymentPolicyArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_continuous_deployment_policy");
  }
}