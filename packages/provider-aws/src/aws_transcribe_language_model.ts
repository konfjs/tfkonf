import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTranscribeLanguageModelArgsInputDataConfig {
  data_access_role_arn: string;
  s3_uri: string;
}
export interface AwsTranscribeLanguageModelArgstimeouts {
  create?: string;
}
export interface AwsTranscribeLanguageModelArgs {
  base_model_name: string;
  language_code: string;
  model_name: string;
  tags?: {
    [key: string]: string;
  };
  input_data_config: AwsTranscribeLanguageModelArgsInputDataConfig;
  timeouts: AwsTranscribeLanguageModelArgstimeouts;
}
export class aws_transcribe_language_model extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTranscribeLanguageModelArgs) {
    super(config, "resource", args, resourceName, "aws_transcribe_language_model");
  }
}