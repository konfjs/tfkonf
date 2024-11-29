import { TerraformConfig, TerraformResource } from "tfs";
export interface AugmentedManifests {
  annotation_data_s3_uri?: string;
  attribute_names: string[];
  document_type?: string;
  s3_uri: string;
  source_documents_s3_uri?: string;
  split?: string;
}
export interface InputDataConfig {
  data_format?: string;
  s3_uri?: string;
  test_s3_uri?: string;
  augmented_manifests: AugmentedManifests;
}
export interface OutputDataConfig {
  kms_key_id?: string;
  s3_uri: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface VpcConfig {
  security_group_ids: string[];
  subnets: string[];
}
export interface AwsComprehendDocumentClassifierArgs {
  data_access_role_arn: string;
  language_code: string;
  mode?: string;
  model_kms_key_id?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  volume_kms_key_id?: string;
  input_data_config: InputDataConfig;
  output_data_config: OutputDataConfig;
  timeouts: Timeouts;
  vpc_config: VpcConfig;
}
export class aws_comprehend_document_classifier extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly version_name?: string;
  readonly version_name_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsComprehendDocumentClassifierArgs) {
    super(config, "resource", args, resourceName, "aws_comprehend_document_classifier");
  }
}