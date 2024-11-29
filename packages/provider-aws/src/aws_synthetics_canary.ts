import { TerraformConfig, TerraformResource } from "tfs";
export interface S3Encryption {
  encryption_mode?: string;
  kms_key_arn?: string;
}
export interface ArtifactConfig {
  s3_encryption: S3Encryption;
}
export interface RunConfig {
  active_tracing?: boolean;
  environment_variables?: {
    [key: string]: string;
  };
}
export interface Schedule {
  duration_in_seconds?: number;
  expression: string;
}
export interface VpcConfig {
  security_group_ids?: string[];
  subnet_ids?: string[];
}
export interface AwsSyntheticsCanaryArgs {
  artifact_s3_location: string;
  delete_lambda?: boolean;
  execution_role_arn: string;
  failure_retention_period?: number;
  handler: string;
  name: string;
  runtime_version: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_version?: string;
  start_canary?: boolean;
  success_retention_period?: number;
  tags?: {
    [key: string]: string;
  };
  zip_file?: string;
  artifact_config: ArtifactConfig;
  run_config: RunConfig;
  schedule: Schedule;
  vpc_config: VpcConfig;
}
export class aws_synthetics_canary extends TerraformResource {
  readonly arn!: string;
  readonly engine_arn!: string;
  readonly id?: string;
  readonly source_location_arn!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly timeline!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsSyntheticsCanaryArgs) {
    super(config, "resource", args, resourceName, "aws_synthetics_canary");
  }
}