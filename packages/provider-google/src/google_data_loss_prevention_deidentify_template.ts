import { TerraformConfig, TerraformResource } from "tfs";
export interface AllInfoTypes {}
export interface AllText {}
export interface RedactionColor {
  blue?: number;
  green?: number;
  red?: number;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface SelectedInfoTypes {
  info_types: InfoTypes;
}
export interface Transforms {
  all_info_types: AllInfoTypes;
  all_text: AllText;
  redaction_color: RedactionColor;
  selected_info_types: SelectedInfoTypes;
}
export interface ImageTransformations {
  transforms: Transforms;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Max {
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Min {
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface ReplacementValue {
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface Buckets {
  max: Max;
  min: Min;
  replacement_value: ReplacementValue;
}
export interface BucketingConfig {
  buckets: Buckets;
}
export interface CharactersToIgnore {
  characters_to_skip?: string;
  common_characters_to_ignore?: string;
}
export interface CharacterMaskConfig {
  masking_character?: string;
  number_to_mask?: number;
  reverse_order?: boolean;
  characters_to_ignore: CharactersToIgnore;
}
export interface Context {
  name?: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface SensitivityScore {
  score: string;
}
export interface SurrogateInfoType {
  name?: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CryptoDeterministicConfig {
  context: Context;
  crypto_key: CryptoKey;
  surrogate_info_type: SurrogateInfoType;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface CryptoHashConfig {
  crypto_key: CryptoKey;
}
export interface Context {
  name?: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface SensitivityScore {
  score: string;
}
export interface SurrogateInfoType {
  name?: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CryptoReplaceFfxFpeConfig {
  common_alphabet?: string;
  custom_alphabet?: string;
  radix?: number;
  context: Context;
  crypto_key: CryptoKey;
  surrogate_info_type: SurrogateInfoType;
}
export interface Context {
  name: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface DateShiftConfig {
  lower_bound_days: number;
  upper_bound_days: number;
  context: Context;
  crypto_key: CryptoKey;
}
export interface LowerBound {
  float_value?: number;
  integer_value?: string;
}
export interface UpperBound {
  float_value?: number;
  integer_value?: string;
}
export interface FixedSizeBucketingConfig {
  bucket_size: number;
  lower_bound: LowerBound;
  upper_bound: UpperBound;
}
export interface RedactConfig {}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface NewValue {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: number;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface ReplaceConfig {
  new_value: NewValue;
}
export interface WordList {
  words: string[];
}
export interface ReplaceDictionaryConfig {
  word_list: WordList;
}
export interface TimePartConfig {
  part_to_extract?: string;
}
export interface PrimitiveTransformation {
  replace_with_info_type_config?: boolean;
  bucketing_config: BucketingConfig;
  character_mask_config: CharacterMaskConfig;
  crypto_deterministic_config: CryptoDeterministicConfig;
  crypto_hash_config: CryptoHashConfig;
  crypto_replace_ffx_fpe_config: CryptoReplaceFfxFpeConfig;
  date_shift_config: DateShiftConfig;
  fixed_size_bucketing_config: FixedSizeBucketingConfig;
  redact_config: RedactConfig;
  replace_config: ReplaceConfig;
  replace_dictionary_config: ReplaceDictionaryConfig;
  time_part_config: TimePartConfig;
}
export interface Transformations {
  info_types: InfoTypes;
  primitive_transformation: PrimitiveTransformation;
}
export interface InfoTypeTransformations {
  transformations: Transformations;
}
export interface Field {
  name?: string;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Value {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface Conditions {
  operator: string;
  field: Field;
  value: Value;
}
export interface Conditions {
  conditions: Conditions;
}
export interface Expressions {
  logical_operator?: string;
  conditions: Conditions;
}
export interface Condition {
  expressions: Expressions;
}
export interface Fields {
  name?: string;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Max {
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Min {
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface ReplacementValue {
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface Buckets {
  max: Max;
  min: Min;
  replacement_value: ReplacementValue;
}
export interface BucketingConfig {
  buckets: Buckets;
}
export interface CharactersToIgnore {
  characters_to_skip?: string;
  common_characters_to_ignore?: string;
}
export interface CharacterMaskConfig {
  masking_character?: string;
  number_to_mask?: number;
  reverse_order?: boolean;
  characters_to_ignore: CharactersToIgnore;
}
export interface Context {
  name: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface SensitivityScore {
  score: string;
}
export interface SurrogateInfoType {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CryptoDeterministicConfig {
  context: Context;
  crypto_key: CryptoKey;
  surrogate_info_type: SurrogateInfoType;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface CryptoHashConfig {
  crypto_key: CryptoKey;
}
export interface Context {
  name: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface SensitivityScore {
  score: string;
}
export interface SurrogateInfoType {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CryptoReplaceFfxFpeConfig {
  common_alphabet?: string;
  custom_alphabet?: string;
  radix?: number;
  context: Context;
  crypto_key: CryptoKey;
  surrogate_info_type: SurrogateInfoType;
}
export interface Context {
  name: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface DateShiftConfig {
  lower_bound_days: number;
  upper_bound_days: number;
  context: Context;
  crypto_key: CryptoKey;
}
export interface LowerBound {
  float_value?: number;
  integer_value?: string;
}
export interface UpperBound {
  float_value?: number;
  integer_value?: string;
}
export interface FixedSizeBucketingConfig {
  bucket_size: number;
  lower_bound: LowerBound;
  upper_bound: UpperBound;
}
export interface RedactConfig {}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface NewValue {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface ReplaceConfig {
  new_value: NewValue;
}
export interface WordList {
  words: string[];
}
export interface ReplaceDictionaryConfig {
  word_list: WordList;
}
export interface ReplaceWithInfoTypeConfig {}
export interface TimePartConfig {
  part_to_extract: string;
}
export interface PrimitiveTransformation {
  bucketing_config: BucketingConfig;
  character_mask_config: CharacterMaskConfig;
  crypto_deterministic_config: CryptoDeterministicConfig;
  crypto_hash_config: CryptoHashConfig;
  crypto_replace_ffx_fpe_config: CryptoReplaceFfxFpeConfig;
  date_shift_config: DateShiftConfig;
  fixed_size_bucketing_config: FixedSizeBucketingConfig;
  redact_config: RedactConfig;
  replace_config: ReplaceConfig;
  replace_dictionary_config: ReplaceDictionaryConfig;
  replace_with_info_type_config: ReplaceWithInfoTypeConfig;
  time_part_config: TimePartConfig;
}
export interface Transformations {
  info_types: InfoTypes;
  primitive_transformation: PrimitiveTransformation;
}
export interface InfoTypeTransformations {
  transformations: Transformations;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Max {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Min {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface ReplacementValue {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface Buckets {
  max: Max;
  min: Min;
  replacement_value: ReplacementValue;
}
export interface BucketingConfig {
  buckets: Buckets;
}
export interface CharactersToIgnore {
  characters_to_skip?: string;
  common_characters_to_ignore?: string;
}
export interface CharacterMaskConfig {
  masking_character?: string;
  number_to_mask?: number;
  reverse_order?: boolean;
  characters_to_ignore: CharactersToIgnore;
}
export interface Context {
  name?: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface SensitivityScore {
  score: string;
}
export interface SurrogateInfoType {
  name?: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CryptoDeterministicConfig {
  context: Context;
  crypto_key: CryptoKey;
  surrogate_info_type: SurrogateInfoType;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface CryptoHashConfig {
  crypto_key: CryptoKey;
}
export interface Context {
  name?: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface SensitivityScore {
  score: string;
}
export interface SurrogateInfoType {
  name?: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CryptoReplaceFfxFpeConfig {
  common_alphabet?: string;
  custom_alphabet?: string;
  radix?: number;
  context: Context;
  crypto_key: CryptoKey;
  surrogate_info_type: SurrogateInfoType;
}
export interface Context {
  name?: string;
}
export interface KmsWrapped {
  crypto_key_name: string;
  wrapped_key: string;
}
export interface Transient {
  name: string;
}
export interface Unwrapped {
  key: string;
}
export interface CryptoKey {
  kms_wrapped: KmsWrapped;
  transient: Transient;
  unwrapped: Unwrapped;
}
export interface DateShiftConfig {
  lower_bound_days: number;
  upper_bound_days: number;
  context: Context;
  crypto_key: CryptoKey;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface LowerBound {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface UpperBound {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface FixedSizeBucketingConfig {
  bucket_size: number;
  lower_bound: LowerBound;
  upper_bound: UpperBound;
}
export interface RedactConfig {}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface NewValue {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface ReplaceConfig {
  new_value: NewValue;
}
export interface WordList {
  words: string[];
}
export interface ReplaceDictionaryConfig {
  word_list: WordList;
}
export interface TimePartConfig {
  part_to_extract?: string;
}
export interface PrimitiveTransformation {
  bucketing_config: BucketingConfig;
  character_mask_config: CharacterMaskConfig;
  crypto_deterministic_config: CryptoDeterministicConfig;
  crypto_hash_config: CryptoHashConfig;
  crypto_replace_ffx_fpe_config: CryptoReplaceFfxFpeConfig;
  date_shift_config: DateShiftConfig;
  fixed_size_bucketing_config: FixedSizeBucketingConfig;
  redact_config: RedactConfig;
  replace_config: ReplaceConfig;
  replace_dictionary_config: ReplaceDictionaryConfig;
  time_part_config: TimePartConfig;
}
export interface FieldTransformations {
  condition: Condition;
  fields: Fields;
  info_type_transformations: InfoTypeTransformations;
  primitive_transformation: PrimitiveTransformation;
}
export interface Field {
  name?: string;
}
export interface DateValue {
  day?: number;
  month?: number;
  year?: number;
}
export interface TimeValue {
  hours?: number;
  minutes?: number;
  nanos?: number;
  seconds?: number;
}
export interface Value {
  boolean_value?: boolean;
  day_of_week_value?: string;
  float_value?: number;
  integer_value?: string;
  string_value?: string;
  timestamp_value?: string;
  date_value: DateValue;
  time_value: TimeValue;
}
export interface Conditions {
  operator: string;
  field: Field;
  value: Value;
}
export interface Conditions {
  conditions: Conditions;
}
export interface Expressions {
  logical_operator?: string;
  conditions: Conditions;
}
export interface Condition {
  expressions: Expressions;
}
export interface RecordSuppressions {
  condition: Condition;
}
export interface RecordTransformations {
  field_transformations: FieldTransformations;
  record_suppressions: RecordSuppressions;
}
export interface DeidentifyConfig {
  image_transformations: ImageTransformations;
  info_type_transformations: InfoTypeTransformations;
  record_transformations: RecordTransformations;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionDeidentifyTemplateArgs {
  description?: string;
  display_name?: string;
  parent: string;
  deidentify_config: DeidentifyConfig;
  timeouts: Timeouts;
}
export class google_data_loss_prevention_deidentify_template extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly template_id?: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionDeidentifyTemplateArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_deidentify_template");
  }
}