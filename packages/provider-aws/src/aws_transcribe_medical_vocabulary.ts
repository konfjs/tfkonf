import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTranscribeMedicalVocabularyArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsTranscribeMedicalVocabularyArgs {
  language_code: string;
  tags?: {
    [key: string]: string;
  };
  vocabulary_file_uri: string;
  vocabulary_name: string;
  timeouts: AwsTranscribeMedicalVocabularyArgstimeouts;
}
export class aws_transcribe_medical_vocabulary extends TerraformResource {
  readonly arn!: string;
  readonly download_uri!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTranscribeMedicalVocabularyArgs) {
    super(config, "resource", args, resourceName, "aws_transcribe_medical_vocabulary");
  }
}