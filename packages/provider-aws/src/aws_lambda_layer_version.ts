import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaLayerVersionArgs {
  compatible_architectures?: string[];
  compatible_runtimes?: string[];
  description?: string;
  filename?: string;
  layer_name: string;
  license_info?: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_object_version?: string;
  skip_destroy?: boolean;
}

export class aws_lambda_layer_version extends TerraformResource {
  readonly arn!: string;
  readonly code_sha256!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly layer_arn!: string;
  readonly signing_job_arn!: string;
  readonly signing_profile_version_arn!: string;
  readonly source_code_hash?: string;
  readonly source_code_size!: number;
  readonly version!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaLayerVersionArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_layer_version");
  }
}
