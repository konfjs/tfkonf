import { TerraformConfig, TerraformResource } from "tfs";
export interface CapacityUnits {}
export interface Relevance {}
export interface Search {}
export interface DocumentMetadataConfigurationUpdates {
  name: string;
  type: string;
  relevance: Relevance;
  search: Search;
}
export interface ServerSideEncryptionConfiguration {
  kms_key_id?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UserGroupResolutionConfiguration {
  user_group_resolution_mode: string;
}
export interface JsonTokenTypeConfiguration {
  group_attribute_field: string;
  user_name_attribute_field: string;
}
export interface JwtTokenTypeConfiguration {
  claim_regex?: string;
  group_attribute_field?: string;
  issuer?: string;
  key_location: string;
  secrets_manager_arn?: string;
  url?: string;
  user_name_attribute_field?: string;
}
export interface UserTokenConfigurations {
  json_token_type_configuration: JsonTokenTypeConfiguration;
  jwt_token_type_configuration: JwtTokenTypeConfiguration;
}
export interface AwsKendraIndexArgs {
  description?: string;
  edition?: string;
  name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  user_context_policy?: string;
  capacity_units: CapacityUnits;
  document_metadata_configuration_updates: DocumentMetadataConfigurationUpdates;
  server_side_encryption_configuration: ServerSideEncryptionConfiguration;
  timeouts: Timeouts;
  user_group_resolution_configuration: UserGroupResolutionConfiguration;
  user_token_configurations: UserTokenConfigurations;
}
export class aws_kendra_index extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly error_message!: string;
  readonly id?: string;
  readonly index_statistics!: any[];
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKendraIndexArgs) {
    super(config, "resource", args, resourceName, "aws_kendra_index");
  }
}