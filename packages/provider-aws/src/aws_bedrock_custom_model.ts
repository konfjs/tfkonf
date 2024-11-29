import { TerraformConfig, TerraformResource } from "tfs";
export interface OutputDataConfig {
  s3_uri: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface TrainingDataConfig {
  s3_uri: string;
}
export interface Validator {
  s3_uri: string;
}
export interface ValidationDataConfig {
  validator: Validator;
}
export interface VpcConfig {
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsBedrockCustomModelArgs {
  base_model_identifier: string;
  custom_model_kms_key_id?: string;
  custom_model_name: string;
  hyperparameters: {
    [key: string]: string;
  };
  job_name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  output_data_config: OutputDataConfig;
  timeouts: Timeouts;
  training_data_config: TrainingDataConfig;
  validation_data_config: ValidationDataConfig;
  vpc_config: VpcConfig;
}
export class aws_bedrock_custom_model extends TerraformResource {
  readonly custom_model_arn!: string;
  readonly customization_type?: string;
  readonly id!: string;
  readonly job_arn!: string;
  readonly job_status!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly training_metrics!: any[];
  readonly validation_metrics!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockCustomModelArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_custom_model");
  }
}