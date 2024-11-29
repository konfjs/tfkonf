import { TerraformConfig, TerraformResource } from "tfs";
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
export interface ClosingResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface Conditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
}
export interface ClosingSetting {
  active?: boolean;
  closing_response: ClosingResponse;
  conditional: Conditional;
  next_step: NextStep;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface FailureConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface FailureNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface FailureResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface SuccessConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface SuccessNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface SuccessResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface TimeoutConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface TimeoutNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface TimeoutResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface PostCodeHookSpecification {
  failure_conditional: FailureConditional;
  failure_next_step: FailureNextStep;
  failure_response: FailureResponse;
  success_conditional: SuccessConditional;
  success_next_step: SuccessNextStep;
  success_response: SuccessResponse;
  timeout_conditional: TimeoutConditional;
  timeout_next_step: TimeoutNextStep;
  timeout_response: TimeoutResponse;
}
export interface CodeHook {
  active: boolean;
  enable_code_hook_invocation: boolean;
  invocation_label?: string;
  post_code_hook_specification: PostCodeHookSpecification;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface ConfirmationConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface ConfirmationNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface ConfirmationResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface DeclinationConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface DeclinationNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface DeclinationResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ElicitationCodeHook {
  enable_code_hook_invocation?: boolean;
  invocation_label?: string;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface FailureConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface FailureNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface FailureResponse {
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
export interface ConfirmationSetting {
  active?: boolean;
  code_hook: CodeHook;
  confirmation_conditional: ConfirmationConditional;
  confirmation_next_step: ConfirmationNextStep;
  confirmation_response: ConfirmationResponse;
  declination_conditional: DeclinationConditional;
  declination_next_step: DeclinationNextStep;
  declination_response: DeclinationResponse;
  elicitation_code_hook: ElicitationCodeHook;
  failure_conditional: FailureConditional;
  failure_next_step: FailureNextStep;
  failure_response: FailureResponse;
  prompt_specification: PromptSpecification;
}
export interface DialogCodeHook {
  enabled: boolean;
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
export interface StartResponse {
  allow_interrupt?: boolean;
  delay_in_seconds?: number;
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
export interface UpdateResponse {
  allow_interrupt?: boolean;
  frequency_in_seconds: number;
  message_group: MessageGroup;
}
export interface FulfillmentUpdatesSpecification {
  active: boolean;
  timeout_in_seconds?: number;
  start_response: StartResponse;
  update_response: UpdateResponse;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface FailureConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface FailureNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface FailureResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface SuccessConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface SuccessNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface SuccessResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface TimeoutConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface TimeoutNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface TimeoutResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface PostFulfillmentStatusSpecification {
  failure_conditional: FailureConditional;
  failure_next_step: FailureNextStep;
  failure_response: FailureResponse;
  success_conditional: SuccessConditional;
  success_next_step: SuccessNextStep;
  success_response: SuccessResponse;
  timeout_conditional: TimeoutConditional;
  timeout_next_step: TimeoutNextStep;
  timeout_response: TimeoutResponse;
}
export interface FulfillmentCodeHook {
  active?: boolean;
  enabled: boolean;
  fulfillment_updates_specification: FulfillmentUpdatesSpecification;
  post_fulfillment_status_specification: PostFulfillmentStatusSpecification;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface FailureConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface FailureNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface FailureResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface SuccessConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface SuccessNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface SuccessResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface TimeoutConditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface TimeoutNextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface TimeoutResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface PostCodeHookSpecification {
  failure_conditional: FailureConditional;
  failure_next_step: FailureNextStep;
  failure_response: FailureResponse;
  success_conditional: SuccessConditional;
  success_next_step: SuccessNextStep;
  success_response: SuccessResponse;
  timeout_conditional: TimeoutConditional;
  timeout_next_step: TimeoutNextStep;
  timeout_response: TimeoutResponse;
}
export interface CodeHook {
  active: boolean;
  enable_code_hook_invocation: boolean;
  invocation_label?: string;
  post_code_hook_specification: PostCodeHookSpecification;
}
export interface Condition {
  expression_string: string;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface ConditionalBranch {
  name: string;
  condition: Condition;
  next_step: NextStep;
  response: Response;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
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
export interface Response {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DefaultBranch {
  next_step: NextStep;
  response: Response;
}
export interface Conditional {
  active: boolean;
  conditional_branch: ConditionalBranch;
  default_branch: DefaultBranch;
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
export interface InitialResponse {
  allow_interrupt?: boolean;
  message_group: MessageGroup;
}
export interface DialogAction {
  slot_to_elicit?: string;
  suppress_next_message?: boolean;
  type: string;
}
export interface Value {
  interpreted_value?: string;
}
export interface Slot {
  map_block_key: string;
  shape?: string;
  value: Value;
}
export interface Intent {
  name?: string;
  slot: Slot;
}
export interface NextStep {
  session_attributes?: {
    [key: string]: string;
  };
  dialog_action: DialogAction;
  intent: Intent;
}
export interface InitialResponseSetting {
  code_hook: CodeHook;
  conditional: Conditional;
  initial_response: InitialResponse;
  next_step: NextStep;
}
export interface InputContext {
  name: string;
}
export interface KendraConfiguration {
  kendra_index: string;
  query_filter_string?: string;
  query_filter_string_enabled?: boolean;
}
export interface OutputContext {
  name: string;
  time_to_live_in_seconds: number;
  turns_to_live: number;
}
export interface SampleUtterance {
  utterance: string;
}
export interface SlotPriority {
  priority: number;
  slot_id: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsLexv2modelsIntentArgs {
  bot_id: string;
  bot_version: string;
  description?: string;
  locale_id: string;
  name: string;
  parent_intent_signature?: string;
  closing_setting: ClosingSetting;
  confirmation_setting: ConfirmationSetting;
  dialog_code_hook: DialogCodeHook;
  fulfillment_code_hook: FulfillmentCodeHook;
  initial_response_setting: InitialResponseSetting;
  input_context: InputContext;
  kendra_configuration: KendraConfiguration;
  output_context: OutputContext;
  sample_utterance: SampleUtterance;
  slot_priority: SlotPriority;
  timeouts: Timeouts;
}
export class aws_lexv2models_intent extends TerraformResource {
  readonly creation_date_time!: string;
  readonly id!: string;
  readonly intent_id!: string;
  readonly last_updated_date_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLexv2modelsIntentArgs) {
    super(config, "resource", args, resourceName, "aws_lexv2models_intent");
  }
}