import { TerraformConfig, TerraformResource } from "tfs";
export interface Items {
  content_type: string;
  format: string;
  profile_id?: string;
}
export interface ContentTypeProfiles {
  items: Items;
}
export interface ContentTypeProfileConfig {
  forward_when_content_type_is_unknown: boolean;
  content_type_profiles: ContentTypeProfiles;
}
export interface Items {
  profile_id: string;
  query_arg: string;
}
export interface QueryArgProfiles {
  items: Items;
}
export interface QueryArgProfileConfig {
  forward_when_query_arg_profile_is_unknown: boolean;
  query_arg_profiles: QueryArgProfiles;
}
export interface AwsCloudfrontFieldLevelEncryptionConfigArgs {
  comment?: string;
  content_type_profile_config: ContentTypeProfileConfig;
  query_arg_profile_config: QueryArgProfileConfig;
}
export class aws_cloudfront_field_level_encryption_config extends TerraformResource {
  readonly caller_reference!: string;
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontFieldLevelEncryptionConfigArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_field_level_encryption_config");
  }
}