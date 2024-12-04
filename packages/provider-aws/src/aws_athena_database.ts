import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAthenaDatabaseArgsAclConfiguration {
  s3_acl_option: string;
}

export interface AwsAthenaDatabaseArgsEncryptionConfiguration {
  encryption_option: string;
  kms_key?: string;
}

export interface AwsAthenaDatabaseArgs {
  bucket?: string;
  comment?: string;
  expected_bucket_owner?: string;
  force_destroy?: boolean;
  name: string;
  properties?: { [key: string]: string };
  acl_configuration: AwsAthenaDatabaseArgsAclConfiguration;
  encryption_configuration: AwsAthenaDatabaseArgsEncryptionConfiguration;
}

export class aws_athena_database extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_athena_database");
  }
}
