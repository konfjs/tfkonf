import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLexSlotTypeArgsEnumerationValue {
  synonyms?: string[];
  value: string;
}
export interface AwsLexSlotTypeArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexSlotTypeArgs {
  create_version?: boolean;
  description?: string;
  name: string;
  value_selection_strategy?: string;
  enumeration_value: AwsLexSlotTypeArgsEnumerationValue;
  timeouts: AwsLexSlotTypeArgstimeouts;
}
export class aws_lex_slot_type extends TerraformResource {
  readonly checksum!: string;
  readonly created_date!: string;
  readonly id?: string;
  readonly last_updated_date!: string;
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexSlotTypeArgs) {
    super(config, "resource", args, resourceName, "aws_lex_slot_type");
  }
}