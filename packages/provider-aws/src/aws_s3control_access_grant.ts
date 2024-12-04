import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsS3controlAccessGrantArgsAccessGrantsLocationConfiguration {
  s3_sub_prefix?: string;
}

export interface AwsS3controlAccessGrantArgsGrantee {
  grantee_identifier: string;
  grantee_type: string;
}

export interface AwsS3controlAccessGrantArgs {
  access_grants_location_id: string;
  permission: string;
  s3_prefix_type?: string;
  tags?: { [key: string]: string };
  access_grants_location_configuration: AwsS3controlAccessGrantArgsAccessGrantsLocationConfiguration;
  grantee: AwsS3controlAccessGrantArgsGrantee;
}

export class aws_s3control_access_grant extends TerraformResource {
  readonly access_grant_arn!: string;
  readonly access_grant_id!: string;
  readonly account_id?: string;
  readonly grant_scope!: string;
  readonly id!: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsS3controlAccessGrantArgs) {
    super(config, "resource", args, resourceName, "aws_s3control_access_grant");
  }
}
