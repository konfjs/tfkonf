import { TerraformConfig, TerraformResource } from "tfs";
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
export interface AwsAppsyncFunctionArgs {
  api_id: string;
  code?: string;
  data_source: string;
  description?: string;
  max_batch_size?: number;
  name: string;
  request_mapping_template?: string;
  response_mapping_template?: string;
  runtime: Runtime;
  sync_config: SyncConfig;
}
export class aws_appsync_function extends TerraformResource {
  readonly arn!: string;
  readonly function_id!: string;
  readonly function_version?: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppsyncFunctionArgs) {
    super(config, "resource", args, resourceName, "aws_appsync_function");
  }
}