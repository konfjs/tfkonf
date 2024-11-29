import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTranscribeVocabularyFilterArgs {
  language_code: string;
  tags?: {
    [key: string]: string;
  };
  vocabulary_filter_file_uri?: string;
  vocabulary_filter_name: string;
  words?: string[];
}
export class aws_transcribe_vocabulary_filter extends TerraformResource {
  readonly arn!: string;
  readonly download_uri!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTranscribeVocabularyFilterArgs) {
    super(config, "resource", args, resourceName, "aws_transcribe_vocabulary_filter");
  }
}