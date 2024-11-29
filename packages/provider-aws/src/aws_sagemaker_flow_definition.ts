import { TerraformConfig, TerraformResource } from "tfs";
export interface HumanLoopActivationConditionsConfig {
  human_loop_activation_conditions: string;
}
export interface HumanLoopActivationConfig {
  human_loop_activation_conditions_config: HumanLoopActivationConditionsConfig;
}
export interface AmountInUsd {
  cents?: number;
  dollars?: number;
  tenth_fractions_of_a_cent?: number;
}
export interface PublicWorkforceTaskPrice {
  amount_in_usd: AmountInUsd;
}
export interface HumanLoopConfig {
  human_task_ui_arn: string;
  task_availability_lifetime_in_seconds?: number;
  task_count: number;
  task_description: string;
  task_keywords?: string[];
  task_time_limit_in_seconds?: number;
  task_title: string;
  workteam_arn: string;
  public_workforce_task_price: PublicWorkforceTaskPrice;
}
export interface HumanLoopRequestSource {
  aws_managed_human_loop_request_source: string;
}
export interface OutputConfig {
  kms_key_id?: string;
  s3_output_path: string;
}
export interface AwsSagemakerFlowDefinitionArgs {
  flow_definition_name: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  human_loop_activation_config: HumanLoopActivationConfig;
  human_loop_config: HumanLoopConfig;
  human_loop_request_source: HumanLoopRequestSource;
  output_config: OutputConfig;
}
export class aws_sagemaker_flow_definition extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSagemakerFlowDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_sagemaker_flow_definition");
  }
}