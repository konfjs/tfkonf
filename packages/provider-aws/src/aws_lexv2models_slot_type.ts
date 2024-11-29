import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSettingSubSlots {
  name: string;
  slot_type_id: string;
}
export interface AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSetting {
  sub_slots: AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSettingSubSlots;
}
export interface AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSettingsource {
  kms_key_arn: string;
  s3_bucket_name: string;
  s3_object_key: string;
}
export interface AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSetting {
  source: AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSettingsource;
}
export interface AwsLexv2modelsSlotTypeArgsExternalSourceSetting {
  grammar_slot_type_setting: AwsLexv2modelsSlotTypeArgsExternalSourceSettingGrammarSlotTypeSetting;
}
export interface AwsLexv2modelsSlotTypeArgsSlotTypeValuesSampleValue {
  value: string;
}
export interface AwsLexv2modelsSlotTypeArgsSlotTypeValuessynonyms {
  value: string;
}
export interface AwsLexv2modelsSlotTypeArgsSlotTypeValues {
  sample_value: AwsLexv2modelsSlotTypeArgsSlotTypeValuesSampleValue;
  synonyms: AwsLexv2modelsSlotTypeArgsSlotTypeValuessynonyms;
}
export interface AwsLexv2modelsSlotTypeArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexv2modelsSlotTypeArgsValueSelectionSettingAdvancedRecognitionSetting {
  audio_recognition_strategy?: string;
}
export interface AwsLexv2modelsSlotTypeArgsValueSelectionSettingRegexFilter {
  pattern: string;
}
export interface AwsLexv2modelsSlotTypeArgsValueSelectionSetting {
  resolution_strategy: string;
  advanced_recognition_setting: AwsLexv2modelsSlotTypeArgsValueSelectionSettingAdvancedRecognitionSetting;
  regex_filter: AwsLexv2modelsSlotTypeArgsValueSelectionSettingRegexFilter;
}
export interface AwsLexv2modelsSlotTypeArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  locale_id: string;
  name: string;
  parent_slot_type_signature?: string;
  composite_slot_type_setting: AwsLexv2modelsSlotTypeArgsCompositeSlotTypeSetting;
  external_source_setting: AwsLexv2modelsSlotTypeArgsExternalSourceSetting;
  slot_type_values: AwsLexv2modelsSlotTypeArgsSlotTypeValues;
  timeouts: AwsLexv2modelsSlotTypeArgstimeouts;
  value_selection_setting: AwsLexv2modelsSlotTypeArgsValueSelectionSetting;
}
export class aws_lexv2models_slot_type extends TerraformResource {
  readonly id!: string;
  readonly slot_type_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsSlotTypeArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_slot_type");
  }
}