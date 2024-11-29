import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsComprehendEntityRecognizerArgsInputDataConfigAnnotations {
  s3_uri: string;
  test_s3_uri?: string;
}
export interface AwsComprehendEntityRecognizerArgsInputDataConfigAugmentedManifests {
  annotation_data_s3_uri?: string;
  attribute_names: string[];
  document_type?: string;
  s3_uri: string;
  source_documents_s3_uri?: string;
  split?: string;
}
export interface AwsComprehendEntityRecognizerArgsInputDataConfigDocuments {
  input_format?: string;
  s3_uri: string;
  test_s3_uri?: string;
}
export interface AwsComprehendEntityRecognizerArgsInputDataConfigEntityList {
  s3_uri: string;
}
export interface AwsComprehendEntityRecognizerArgsInputDataConfigEntityTypes {
  type: string;
}
export interface AwsComprehendEntityRecognizerArgsInputDataConfig {
  data_format?: string;
  annotations: AwsComprehendEntityRecognizerArgsInputDataConfigAnnotations;
  augmented_manifests: AwsComprehendEntityRecognizerArgsInputDataConfigAugmentedManifests;
  documents: AwsComprehendEntityRecognizerArgsInputDataConfigDocuments;
  entity_list: AwsComprehendEntityRecognizerArgsInputDataConfigEntityList;
  entity_types: AwsComprehendEntityRecognizerArgsInputDataConfigEntityTypes;
}
export interface AwsComprehendEntityRecognizerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsComprehendEntityRecognizerArgsVpcConfig {
  security_group_ids: string[];
  subnets: string[];
}
export interface AwsComprehendEntityRecognizerArgs {
  data_access_role_arn: string;
  language_code: string;
  model_kms_key_id?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  volume_kms_key_id?: string;
  input_data_config: AwsComprehendEntityRecognizerArgsInputDataConfig;
  timeouts?: AwsComprehendEntityRecognizerArgsTimeouts;
  vpc_config: AwsComprehendEntityRecognizerArgsVpcConfig;
}
export class aws_comprehend_entity_recognizer extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_name?: string;
  readonly version_name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsComprehendEntityRecognizerArgs) {
    super(config, "resource", args, resourceName, "aws_comprehend_entity_recognizer");
  }
}