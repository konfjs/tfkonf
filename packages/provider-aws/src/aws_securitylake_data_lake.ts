import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationExpiration {
  days?: number;
}
export interface AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationTransition {
  days?: number;
  storage_class?: string;
}
export interface AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfiguration {
  expiration: AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationExpiration;
  transition: AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfigurationTransition;
}
export interface AwsSecuritylakeDataLakeArgsConfigurationReplicationConfiguration {
  regions?: string[];
  role_arn?: string;
}
export interface AwsSecuritylakeDataLakeArgsConfiguration {
  region: string;
  lifecycle_configuration: AwsSecuritylakeDataLakeArgsConfigurationLifecycleConfiguration;
  replication_configuration: AwsSecuritylakeDataLakeArgsConfigurationReplicationConfiguration;
}
export interface AwsSecuritylakeDataLakeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSecuritylakeDataLakeArgs {
  meta_store_manager_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsSecuritylakeDataLakeArgsConfiguration;
  timeouts: AwsSecuritylakeDataLakeArgsTimeouts;
}
export class aws_securitylake_data_lake extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly s3_bucket_arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecuritylakeDataLakeArgs) {
    super(config, "resource", args, resourceName, "aws_securitylake_data_lake");
  }
}