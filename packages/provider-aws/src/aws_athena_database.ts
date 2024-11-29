import { TerraformConfig, TerraformResource } from "tfs";
export interface AclConfiguration {
  s3_acl_option: string;
}
export interface EncryptionConfiguration {
  encryption_option: string;
  kms_key?: string;
}
export interface AwsAthenaDatabaseArgs {
  bucket?: string;
  comment?: string;
  expected_bucket_owner?: string;
  force_destroy?: boolean;
  name: string;
  properties?: {
    [key: string]: string;
  };
  acl_configuration: AclConfiguration;
  encryption_configuration: EncryptionConfiguration;
}
export class aws_athena_database extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_athena_database");
  }
}