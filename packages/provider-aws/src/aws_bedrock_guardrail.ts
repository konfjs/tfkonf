import { TerraformConfig, TerraformResource } from "tfs";
export interface FiltersConfig {
  input_strength: string;
  output_strength: string;
  type: string;
}
export interface ContentPolicyConfig {
  filters_config: FiltersConfig;
}
export interface FiltersConfig {
  threshold: number;
  type: string;
}
export interface ContextualGroundingPolicyConfig {
  filters_config: FiltersConfig;
}
export interface PiiEntitiesConfig {
  action: string;
  type: string;
}
export interface RegexesConfig {
  action: string;
  name: string;
  pattern: string;
}
export interface SensitiveInformationPolicyConfig {
  pii_entities_config: PiiEntitiesConfig;
  regexes_config: RegexesConfig;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface TopicsConfig {
  definition: string;
  name: string;
  type: string;
}
export interface TopicPolicyConfig {
  topics_config: TopicsConfig;
}
export interface ManagedWordListsConfig {
  type: string;
}
export interface WordsConfig {
  text: string;
}
export interface WordPolicyConfig {
  managed_word_lists_config: ManagedWordListsConfig;
  words_config: WordsConfig;
}
export interface AwsBedrockGuardrailArgs {
  blocked_input_messaging: string;
  blocked_outputs_messaging: string;
  kms_key_arn?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  content_policy_config: ContentPolicyConfig;
  contextual_grounding_policy_config: ContextualGroundingPolicyConfig;
  sensitive_information_policy_config: SensitiveInformationPolicyConfig;
  timeouts: Timeouts;
  topic_policy_config: TopicPolicyConfig;
  word_policy_config: WordPolicyConfig;
}
export class aws_bedrock_guardrail extends TerraformResource {
  readonly created_at!: string;
  readonly description?: string;
  readonly guardrail_arn!: string;
  readonly guardrail_id!: string;
  readonly status!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  readonly version!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsBedrockGuardrailArgs) {
    super(config, "resource", args, resourceName, "aws_bedrock_guardrail");
  }
}