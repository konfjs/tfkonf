import { TerraformConfig, TerraformResource } from "tfs";
export interface Expiration {
  days?: number;
}
export interface Transition {
  days?: number;
  storage_class?: string;
}
export interface LifecycleConfiguration {
  expiration: Expiration;
  transition: Transition;
}
export interface ReplicationConfiguration {
  regions?: string[];
  role_arn?: string;
}
export interface Configuration {
  region: string;
  lifecycle_configuration: LifecycleConfiguration;
  replication_configuration: ReplicationConfiguration;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsSecuritylakeDataLakeArgs {
  meta_store_manager_role_arn: string;
  tags?: {
    [key: string]: string;
  };
  configuration: Configuration;
  timeouts: Timeouts;
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