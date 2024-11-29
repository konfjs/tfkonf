import { TerraformConfig, TerraformResource } from "tfs";
export interface MultipleValuesSetting {
  allow_multiple_values?: boolean;
}
export interface ObfuscationSetting {
  obfuscation_setting_type: string;
}
export interface DefaultValueList {
  default_value: string;
}
export interface DefaultValueSpecification {
  default_value_list: DefaultValueList;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface AllowedInputTypes {
  allow_audio_input: boolean;
  allow_dtmf_input: boolean;
}
export interface AudioSpecification {
  end_timeout_ms: number;
  max_length_ms: number;
}
export interface DtmfSpecification {
  deletion_character: string;
  end_character: string;
  end_timeout_ms: number;
  max_length: number;
}
export interface AudioAndDtmfInputSpecification {
  start_timeout_ms: number;
  audio_specification: AudioSpecification;
  dtmf_specification: DtmfSpecification;
}
export interface TextInputSpecification {
  start_timeout_ms: number;
}
export interface PromptAttemptsSpecification {
  allow_interrupt?: boolean;
  map_block_key: string;
  allowed_input_types: AllowedInputTypes;
  audio_and_dtmf_input_specification: AudioAndDtmfInputSpecification;
  text_input_specification: TextInputSpecification;
}
export interface PromptSpecification {
  allow_interrupt?: boolean;
  max_retries: number;
  message_selection_strategy?: string;
  message_group: MessageGroup;
  prompt_attempts_specification: PromptAttemptsSpecification;
}
export interface SampleUtterance {
  utterance: string;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface ContinueResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface StillWaitingResponse {
  allow_interrupt?: boolean;
  frequency_in_seconds: number;
  timeout_in_seconds: number;
  message_group: MessageGroup;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface WaitingResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface WaitAndContinueSpecification {
  active?: boolean;
  continue_response: ContinueResponse;
  still_waiting_response: StillWaitingResponse;
  waiting_response: WaitingResponse;
}
export interface ValueElicitationSetting {
  default_value_specification: DefaultValueSpecification;
  prompt_specification: PromptSpecification;
  sample_utterance: SampleUtterance;
  wait_and_continue_specification: WaitAndContinueSpecification;
}
export interface SlotSpecification {
  map_block_key: string;
  slot_type_id: string;
  value_elicitation_setting: ValueElicitationSetting;
}
export interface SubSlotSetting {
  expression?: string;
  slot_specification: SlotSpecification;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface DefaultValueList {
  default_value: string;
}
export interface DefaultValueSpecification {
  default_value_list: DefaultValueList;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface AllowedInputTypes {
  allow_audio_input: boolean;
  allow_dtmf_input: boolean;
}
export interface AudioSpecification {
  end_timeout_ms: number;
  max_length_ms: number;
}
export interface DtmfSpecification {
  deletion_character: string;
  end_character: string;
  end_timeout_ms: number;
  max_length: number;
}
export interface AudioAndDtmfInputSpecification {
  start_timeout_ms: number;
  audio_specification: AudioSpecification;
  dtmf_specification: DtmfSpecification;
}
export interface TextInputSpecification {
  start_timeout_ms: number;
}
export interface PromptAttemptsSpecification {
  allow_interrupt?: boolean;
  map_block_key: string;
  allowed_input_types: AllowedInputTypes;
  audio_and_dtmf_input_specification: AudioAndDtmfInputSpecification;
  text_input_specification: TextInputSpecification;
}
export interface PromptSpecification {
  allow_interrupt?: boolean;
  max_retries: number;
  message_selection_strategy?: string;
  message_group: MessageGroup;
  prompt_attempts_specification: PromptAttemptsSpecification;
}
export interface SampleUtterance {
  utterance: string;
}
export interface SlotResolutionSetting {
  slot_resolution_strategy: string;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface ContinueResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface StillWaitingResponse {
  allow_interrupt?: boolean;
  frequency_in_seconds: number;
  timeout_in_seconds: number;
  message_group: MessageGroup;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Message {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface CustomPayload {
  value: string;
}
export interface Button {
  text: string;
  value: string;
}
export interface ImageResponseCard {
  image_url?: string;
  subtitle?: string;
  title: string;
  button: Button;
}
export interface PlainTextMessage {
  value: string;
}
export interface SsmlMessage {
  value: string;
}
export interface Variation {
  custom_payload: CustomPayload;
  image_response_card: ImageResponseCard;
  plain_text_message: PlainTextMessage;
  ssml_message: SsmlMessage;
}
export interface MessageGroup {
  message: Message;
  variation: Variation;
}
export interface WaitingResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface WaitAndContinueSpecification {
  active?: boolean;
  continue_response: ContinueResponse;
  still_waiting_response: StillWaitingResponse;
  waiting_response: WaitingResponse;
}
export interface ValueElicitationSetting {
  slot_constraint: string;
  default_value_specification: DefaultValueSpecification;
  prompt_specification: PromptSpecification;
  sample_utterance: SampleUtterance;
  slot_resolution_setting: SlotResolutionSetting;
  wait_and_continue_specification: WaitAndContinueSpecification;
}
export interface AwsLexv2modelsSlotArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  intent_id: string;
  locale_id: string;
  name: string;
  multiple_values_setting: MultipleValuesSetting;
  obfuscation_setting: ObfuscationSetting;
  sub_slot_setting: SubSlotSetting;
  timeouts: Timeouts;
  value_elicitation_setting: ValueElicitationSetting;
}
export class aws_lexv2models_slot extends TerraformResource {
  readonly id!: string;
  readonly slot_id!: string;
  readonly slot_type_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsSlotArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_slot");
  }
}