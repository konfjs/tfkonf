import { TerraformConfig, TerraformResource } from "tfs";
export interface FieldPatterns {
  items?: string[];
}
export interface Items {
  provider_id: string;
  public_key_id: string;
  field_patterns: FieldPatterns;
}
export interface EncryptionEntities {
  items: Items;
}
export interface AwsCloudfrontFieldLevelEncryptionProfileArgs {
  comment?: string;
  name: string;
  encryption_entities: EncryptionEntities;
}
export class aws_cloudfront_field_level_encryption_profile extends TerraformResource {
  readonly caller_reference!: string;
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudfrontFieldLevelEncryptionProfileArgs) {
    super(config, "resource", args, resourceName, "aws_cloudfront_field_level_encryption_profile");
  }
}