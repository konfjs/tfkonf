import { TerraformConfig, TerraformResource } from "tfs";
export interface SubSlots {
  name: string;
  slot_type_id: string;
}
export interface CompositeSlotTypeSetting {
  sub_slots: SubSlots;
}
export interface Source {
  kms_key_arn: string;
  s3_bucket_name: string;
  s3_object_key: string;
}
export interface GrammarSlotTypeSetting {
  source: Source;
}
export interface ExternalSourceSetting {
  grammar_slot_type_setting: GrammarSlotTypeSetting;
}
export interface SampleValue {
  value: string;
}
export interface Synonyms {
  value: string;
}
export interface SlotTypeValues {
  sample_value: SampleValue;
  synonyms: Synonyms;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AdvancedRecognitionSetting {
  audio_recognition_strategy?: string;
}
export interface RegexFilter {
  pattern: string;
}
export interface ValueSelectionSetting {
  resolution_strategy: string;
  advanced_recognition_setting: AdvancedRecognitionSetting;
  regex_filter: RegexFilter;
}
export interface AwsLexv2modelsSlotTypeArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  locale_id: string;
  name: string;
  parent_slot_type_signature?: string;
  composite_slot_type_setting: CompositeSlotTypeSetting;
  external_source_setting: ExternalSourceSetting;
  slot_type_values: SlotTypeValues;
  timeouts: Timeouts;
  value_selection_setting: ValueSelectionSetting;
}
export class aws_lexv2models_slot_type extends TerraformResource {
  readonly id!: string;
  readonly slot_type_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsSlotTypeArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_slot_type");
  }
}