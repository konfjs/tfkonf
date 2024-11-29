import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsRdsCustomDbEngineVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsRdsCustomDbEngineVersionArgs {
  database_installation_files_s3_bucket_name?: string;
  database_installation_files_s3_prefix?: string;
  description?: string;
  engine: string;
  engine_version: string;
  filename?: string;
  manifest?: string;
  manifest_hash?: string;
  source_image_id?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsRdsCustomDbEngineVersionArgsTimeouts;
}
export class aws_rds_custom_db_engine_version extends TerraformResource {
  readonly arn!: string;
  readonly create_time!: string;
  readonly db_parameter_group_family!: string;
  readonly id?: string;
  readonly image_id!: string;
  readonly kms_key_id?: string;
  readonly major_engine_version!: string;
  readonly manifest_computed!: string;
  readonly status?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsCustomDbEngineVersionArgs) {
    super(config, "resource", args, resourceName, "aws_rds_custom_db_engine_version");
  }
}