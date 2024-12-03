import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItemsFieldPatterns {
  items?: string[];
}
export interface AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItems {
  provider_id: string;
  public_key_id: string;
  field_patterns: AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItemsFieldPatterns;
}
export interface AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntities {
  items: AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntitiesItems;
}
export interface AwsCloudfrontFieldLevelEncryptionProfileArgs {
  comment?: string;
  name: string;
  encryption_entities: AwsCloudfrontFieldLevelEncryptionProfileArgsEncryptionEntities;
}
export class aws_cloudfront_field_level_encryption_profile extends TerraformResource {
  readonly caller_reference!: string;
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontFieldLevelEncryptionProfileArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_field_level_encryption_profile");
  }
}