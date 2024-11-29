import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAppsyncResolverArgsCachingConfig {
  caching_keys?: string[];
  ttl?: number;
}
export interface AwsAppsyncResolverArgsPipelineConfig {
  functions?: string[];
}
export interface AwsAppsyncResolverArgsRuntime {
  name: string;
  runtime_version: string;
}
export interface AwsAppsyncResolverArgsSyncConfigLambdaConflictHandlerConfig {
  lambda_conflict_handler_arn?: string;
}
export interface AwsAppsyncResolverArgsSyncConfig {
  conflict_detection?: string;
  conflict_handler?: string;
  lambda_conflict_handler_config: AwsAppsyncResolverArgsSyncConfigLambdaConflictHandlerConfig;
}
export interface AwsAppsyncResolverArgs {
  api_id: string;
  code?: string;
  data_source?: string;
  field: string;
  kind?: string;
  max_batch_size?: number;
  request_template?: string;
  response_template?: string;
  type: string;
  caching_config: AwsAppsyncResolverArgsCachingConfig;
  pipeline_config: AwsAppsyncResolverArgsPipelineConfig;
  runtime: AwsAppsyncResolverArgsRuntime;
  sync_config: AwsAppsyncResolverArgsSyncConfig;
}
export class aws_appsync_resolver extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncResolverArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_resolver");
  }
}