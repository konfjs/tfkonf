import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfilesItems {
  content_type: string;
  format: string;
  profile_id?: string;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfiles {
  items: AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfilesItems;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfig {
  forward_when_content_type_is_unknown: boolean;
  content_type_profiles: AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfigContentTypeProfiles;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfilesItems {
  profile_id: string;
  query_arg: string;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfiles {
  items: AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfilesItems;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfig {
  forward_when_query_arg_profile_is_unknown: boolean;
  query_arg_profiles: AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfigQueryArgProfiles;
}

export interface AwsCloudfrontFieldLevelEncryptionConfigArgs {
  comment?: string;
  content_type_profile_config: AwsCloudfrontFieldLevelEncryptionConfigArgsContentTypeProfileConfig;
  query_arg_profile_config: AwsCloudfrontFieldLevelEncryptionConfigArgsQueryArgProfileConfig;
}

export class aws_cloudfront_field_level_encryption_config extends TerraformResource {
  readonly caller_reference!: string;
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontFieldLevelEncryptionConfigArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_field_level_encryption_config");
  }
}
