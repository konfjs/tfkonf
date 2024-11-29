import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAthenaWorkgroupArgsconfigurationEngineVersion {
  selected_engine_version?: string;
}
export interface AwsAthenaWorkgroupArgsconfigurationResultConfigurationAclConfiguration {
  s3_acl_option: string;
}
export interface AwsAthenaWorkgroupArgsconfigurationResultConfigurationEncryptionConfiguration {
  encryption_option?: string;
  kms_key_arn?: string;
}
export interface AwsAthenaWorkgroupArgsconfigurationResultConfiguration {
  expected_bucket_owner?: string;
  output_location?: string;
  acl_configuration: AwsAthenaWorkgroupArgsconfigurationResultConfigurationAclConfiguration;
  encryption_configuration: AwsAthenaWorkgroupArgsconfigurationResultConfigurationEncryptionConfiguration;
}
export interface AwsAthenaWorkgroupArgsconfiguration {
  bytes_scanned_cutoff_per_query?: number;
  enforce_workgroup_configuration?: boolean;
  execution_role?: string;
  publish_cloudwatch_metrics_enabled?: boolean;
  requester_pays_enabled?: boolean;
  engine_version: AwsAthenaWorkgroupArgsconfigurationEngineVersion;
  result_configuration: AwsAthenaWorkgroupArgsconfigurationResultConfiguration;
}
export interface AwsAthenaWorkgroupArgs {
  description?: string;
  force_destroy?: boolean;
  name: string;
  state?: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsAthenaWorkgroupArgsconfiguration;
}
export class aws_athena_workgroup extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaWorkgroupArgs) {
    super(config, "resource", args, resourceName, "aws_athena_workgroup");
  }
}