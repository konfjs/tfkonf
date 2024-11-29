import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecuritylakeDataLakeArgsconfigurationLifecycleConfigurationexpiration {
  days?: number;
}
export interface AwsSecuritylakeDataLakeArgsconfigurationLifecycleConfigurationtransition {
  days?: number;
  storage_class?: string;
}
export interface AwsSecuritylakeDataLakeArgsconfigurationLifecycleConfiguration {
  expiration: AwsSecuritylakeDataLakeArgsconfigurationLifecycleConfigurationexpiration;
  transition: AwsSecuritylakeDataLakeArgsconfigurationLifecycleConfigurationtransition;
}
export interface AwsSecuritylakeDataLakeArgsconfigurationReplicationConfiguration {
  regions?: string[];
  role_arn?: string;
}
export interface AwsSecuritylakeDataLakeArgsconfiguration {
  region: string;
  lifecycle_configuration: AwsSecuritylakeDataLakeArgsconfigurationLifecycleConfiguration;
  replication_configuration: AwsSecuritylakeDataLakeArgsconfigurationReplicationConfiguration;
}
export interface AwsSecuritylakeDataLakeArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSecuritylakeDataLakeArgs {
  meta_store_manager_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  configuration: AwsSecuritylakeDataLakeArgsconfiguration;
  timeouts: AwsSecuritylakeDataLakeArgstimeouts;
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