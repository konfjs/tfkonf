import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTranscribeVocabularyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsTranscribeVocabularyArgs {
  language_code: string;
  phrases?: string[];
  tags?: { [key: string]: string };
  vocabulary_name: string;
  timeouts?: AwsTranscribeVocabularyArgsTimeouts;
}

export class aws_transcribe_vocabulary extends TerraformResource {
  readonly arn!: string;
  readonly download_uri!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };
  readonly vocabulary_file_uri?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsTranscribeVocabularyArgs) {
    super(config, "resource", args, resourceName, "aws_transcribe_vocabulary");
  }
}
