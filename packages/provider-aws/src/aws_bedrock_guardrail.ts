import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBedrockGuardrailArgsContentPolicyConfigFiltersConfig {
  input_strength: string;
  output_strength: string;
  type: string;
}
export interface AwsBedrockGuardrailArgsContentPolicyConfig {
  filters_config: AwsBedrockGuardrailArgsContentPolicyConfigFiltersConfig;
}
export interface AwsBedrockGuardrailArgsContextualGroundingPolicyConfigFiltersConfig {
  threshold: number;
  type: string;
}
export interface AwsBedrockGuardrailArgsContextualGroundingPolicyConfig {
  filters_config: AwsBedrockGuardrailArgsContextualGroundingPolicyConfigFiltersConfig;
}
export interface AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigPiiEntitiesConfig {
  action: string;
  type: string;
}
export interface AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigRegexesConfig {
  action: string;
  name: string;
  pattern: string;
}
export interface AwsBedrockGuardrailArgsSensitiveInformationPolicyConfig {
  pii_entities_config: AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigPiiEntitiesConfig;
  regexes_config: AwsBedrockGuardrailArgsSensitiveInformationPolicyConfigRegexesConfig;
}
export interface AwsBedrockGuardrailArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBedrockGuardrailArgsTopicPolicyConfigTopicsConfig {
  definition: string;
  name: string;
  type: string;
}
export interface AwsBedrockGuardrailArgsTopicPolicyConfig {
  topics_config: AwsBedrockGuardrailArgsTopicPolicyConfigTopicsConfig;
}
export interface AwsBedrockGuardrailArgsWordPolicyConfigManagedWordListsConfig {
  type: string;
}
export interface AwsBedrockGuardrailArgsWordPolicyConfigWordsConfig {
  text: string;
}
export interface AwsBedrockGuardrailArgsWordPolicyConfig {
  managed_word_lists_config: AwsBedrockGuardrailArgsWordPolicyConfigManagedWordListsConfig;
  words_config: AwsBedrockGuardrailArgsWordPolicyConfigWordsConfig;
}
export interface AwsBedrockGuardrailArgs {
  blocked_input_messaging: string;
  blocked_outputs_messaging: string;
  kms_key_arn?: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  content_policy_config: AwsBedrockGuardrailArgsContentPolicyConfig;
  contextual_grounding_policy_config: AwsBedrockGuardrailArgsContextualGroundingPolicyConfig;
  sensitive_information_policy_config: AwsBedrockGuardrailArgsSensitiveInformationPolicyConfig;
  timeouts?: AwsBedrockGuardrailArgsTimeouts;
  topic_policy_config: AwsBedrockGuardrailArgsTopicPolicyConfig;
  word_policy_config: AwsBedrockGuardrailArgsWordPolicyConfig;
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