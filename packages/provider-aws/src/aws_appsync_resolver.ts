import { TerraformConfig, TerraformResource } from "tfs";
export interface CachingConfig {
  caching_keys?: string[];
  ttl?: number;
}
export interface PipelineConfig {
  functions?: string[];
}
export interface Runtime {
  name: string;
  runtime_version: string;
}
export interface LambdaConflictHandlerConfig {
  lambda_conflict_handler_arn?: string;
}
export interface SyncConfig {
  conflict_detection?: string;
  conflict_handler?: string;
  lambda_conflict_handler_config: LambdaConflictHandlerConfig;
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
  caching_config: CachingConfig;
  pipeline_config: PipelineConfig;
  runtime: Runtime;
  sync_config: SyncConfig;
}
export class aws_appsync_resolver extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncResolverArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_resolver");
  }
}