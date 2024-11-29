import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKendraIndexArgsCapacityUnits {}
export interface AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesRelevance {}
export interface AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesSearch {}
export interface AwsKendraIndexArgsDocumentMetadataConfigurationUpdates {
  name: string;
  type: string;
  relevance: AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesRelevance;
  search: AwsKendraIndexArgsDocumentMetadataConfigurationUpdatesSearch;
}
export interface AwsKendraIndexArgsServerSideEncryptionConfiguration {
  kms_key_id?: string;
}
export interface AwsKendraIndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKendraIndexArgsUserGroupResolutionConfiguration {
  user_group_resolution_mode: string;
}
export interface AwsKendraIndexArgsUserTokenConfigurationsJsonTokenTypeConfiguration {
  group_attribute_field: string;
  user_name_attribute_field: string;
}
export interface AwsKendraIndexArgsUserTokenConfigurationsJwtTokenTypeConfiguration {
  claim_regex?: string;
  group_attribute_field?: string;
  issuer?: string;
  key_location: string;
  secrets_manager_arn?: string;
  url?: string;
  user_name_attribute_field?: string;
}
export interface AwsKendraIndexArgsUserTokenConfigurations {
  json_token_type_configuration: AwsKendraIndexArgsUserTokenConfigurationsJsonTokenTypeConfiguration;
  jwt_token_type_configuration: AwsKendraIndexArgsUserTokenConfigurationsJwtTokenTypeConfiguration;
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
  capacity_units: AwsKendraIndexArgsCapacityUnits;
  document_metadata_configuration_updates: AwsKendraIndexArgsDocumentMetadataConfigurationUpdates;
  server_side_encryption_configuration: AwsKendraIndexArgsServerSideEncryptionConfiguration;
  timeouts: AwsKendraIndexArgsTimeouts;
  user_group_resolution_configuration: AwsKendraIndexArgsUserGroupResolutionConfiguration;
  user_token_configurations: AwsKendraIndexArgsUserTokenConfigurations;
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