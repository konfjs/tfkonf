import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSyntheticsCanaryArgsArtifactConfigS3Encryption {
  encryption_mode?: string;
  kms_key_arn?: string;
}
export interface AwsSyntheticsCanaryArgsArtifactConfig {
  s3_encryption: AwsSyntheticsCanaryArgsArtifactConfigS3Encryption;
}
export interface AwsSyntheticsCanaryArgsRunConfig {
  active_tracing?: boolean;
  environment_variables?: {
    [key: string]: string;
  };
}
export interface AwsSyntheticsCanaryArgsSchedule {
  duration_in_seconds?: number;
  expression: string;
}
export interface AwsSyntheticsCanaryArgsVpcConfig {
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
  artifact_config: AwsSyntheticsCanaryArgsArtifactConfig;
  run_config: AwsSyntheticsCanaryArgsRunConfig;
  schedule: AwsSyntheticsCanaryArgsSchedule;
  vpc_config: AwsSyntheticsCanaryArgsVpcConfig;
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