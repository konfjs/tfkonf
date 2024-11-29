import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAthenaWorkgroupArgsConfigurationEngineVersion {
  selected_engine_version?: string;
}
export interface AwsAthenaWorkgroupArgsConfigurationResultConfigurationAclConfiguration {
  s3_acl_option: string;
}
export interface AwsAthenaWorkgroupArgsConfigurationResultConfigurationEncryptionConfiguration {
  encryption_option?: string;
  kms_key_arn?: string;
}
export interface AwsAthenaWorkgroupArgsConfigurationResultConfiguration {
  expected_bucket_owner?: string;
  output_location?: string;
  acl_configuration: AwsAthenaWorkgroupArgsConfigurationResultConfigurationAclConfiguration;
  encryption_configuration: AwsAthenaWorkgroupArgsConfigurationResultConfigurationEncryptionConfiguration;
}
export interface AwsAthenaWorkgroupArgsConfiguration {
  bytes_scanned_cutoff_per_query?: number;
  enforce_workgroup_configuration?: boolean;
  execution_role?: string;
  publish_cloudwatch_metrics_enabled?: boolean;
  requester_pays_enabled?: boolean;
  engine_version: AwsAthenaWorkgroupArgsConfigurationEngineVersion;
  result_configuration: AwsAthenaWorkgroupArgsConfigurationResultConfiguration;
}
export interface AwsAthenaWorkgroupArgs {
  description?: string;
  force_destroy?: boolean;
  name: string;
  state?: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsAthenaWorkgroupArgsConfiguration;
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