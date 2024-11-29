import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsConnectVocabularyArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsConnectVocabularyArgs {
  content: string;
  instance_id: string;
  language_code: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsConnectVocabularyArgsTimeouts;
}
export class aws_connect_vocabulary extends TerraformResource {
  readonly arn!: string;
  readonly failure_reason!: string;
  readonly id?: string;
  readonly last_modified_time!: string;
  readonly state!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly vocabulary_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsConnectVocabularyArgs) {
    super(config, "resource", args, resourceName, "aws_connect_vocabulary");
  }
}