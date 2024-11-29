import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMacie2CustomDataIdentifierArgs {
  description?: string;
  ignore_words?: string[];
  keywords?: string[];
  regex?: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_macie2_custom_data_identifier extends TerraformResource {
  readonly arn!: string;
  readonly created_at!: string;
  readonly id?: string;
  readonly maximum_match_distance?: number;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2CustomDataIdentifierArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_custom_data_identifier");
  }
}