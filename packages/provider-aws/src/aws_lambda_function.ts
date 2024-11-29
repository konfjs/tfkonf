import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLambdaFunctionArgsDeadLetterConfig {
  target_arn: string;
}
export interface AwsLambdaFunctionArgsEnvironment {
  variables?: {
    [key: string]: string;
  };
}
export interface AwsLambdaFunctionArgsEphemeralStorage {}
export interface AwsLambdaFunctionArgsFileSystemConfig {
  arn: string;
  local_mount_path: string;
}
export interface AwsLambdaFunctionArgsImageConfig {
  command?: string[];
  entry_point?: string[];
  working_directory?: string;
}
export interface AwsLambdaFunctionArgsLoggingConfig {
  application_log_level?: string;
  log_format: string;
  system_log_level?: string;
}
export interface AwsLambdaFunctionArgsSnapStart {
  apply_on: string;
}
export interface AwsLambdaFunctionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLambdaFunctionArgsTracingConfig {
  mode: string;
}
export interface AwsLambdaFunctionArgsVpcConfig {
  ipv6_allowed_for_dual_stack?: boolean;
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsLambdaFunctionArgs {
  code_signing_config_arn?: string;
  description?: string;
  filename?: string;
  function_name: string;
  handler?: string;
  image_uri?: string;
  kms_key_arn?: string;
  layers?: string[];
  memory_size?: number;
  package_type?: string;
  publish?: boolean;
  replace_security_groups_on_destroy?: boolean;
  replacement_security_group_ids?: string[];
  reserved_concurrent_executions?: number;
  role: string;
  runtime?: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_object_version?: string;
  skip_destroy?: boolean;
  tags?: {
    [key: string]: string;
  };
  timeout?: number;
  dead_letter_config: AwsLambdaFunctionArgsDeadLetterConfig;
  environment: AwsLambdaFunctionArgsEnvironment;
  ephemeral_storage: AwsLambdaFunctionArgsEphemeralStorage;
  file_system_config: AwsLambdaFunctionArgsFileSystemConfig;
  image_config: AwsLambdaFunctionArgsImageConfig;
  logging_config: AwsLambdaFunctionArgsLoggingConfig;
  snap_start: AwsLambdaFunctionArgsSnapStart;
  timeouts: AwsLambdaFunctionArgsTimeouts;
  tracing_config: AwsLambdaFunctionArgsTracingConfig;
  vpc_config: AwsLambdaFunctionArgsVpcConfig;
}
export class aws_lambda_function extends TerraformResource {
  readonly architectures?: string[];
  readonly arn!: string;
  readonly code_sha256!: string;
  readonly id?: string;
  readonly invoke_arn!: string;
  readonly last_modified!: string;
  readonly qualified_arn!: string;
  readonly qualified_invoke_arn!: string;
  readonly signing_job_arn!: string;
  readonly signing_profile_version_arn!: string;
  readonly source_code_hash?: string;
  readonly source_code_size!: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaFunctionArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_function");
  }
}