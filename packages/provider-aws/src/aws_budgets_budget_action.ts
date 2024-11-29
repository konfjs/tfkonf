import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsBudgetsBudgetActionArgsActionThreshold {
  action_threshold_type: string;
  action_threshold_value: number;
}
export interface AwsBudgetsBudgetActionArgsDefinitionIamActionDefinition {
  groups?: string[];
  policy_arn: string;
  roles?: string[];
  users?: string[];
}
export interface AwsBudgetsBudgetActionArgsDefinitionScpActionDefinition {
  policy_id: string;
  target_ids: string[];
}
export interface AwsBudgetsBudgetActionArgsDefinitionSsmActionDefinition {
  action_sub_type: string;
  instance_ids: string[];
  region: string;
}
export interface AwsBudgetsBudgetActionArgsDefinition {
  iam_action_definition: AwsBudgetsBudgetActionArgsDefinitionIamActionDefinition;
  scp_action_definition: AwsBudgetsBudgetActionArgsDefinitionScpActionDefinition;
  ssm_action_definition: AwsBudgetsBudgetActionArgsDefinitionSsmActionDefinition;
}
export interface AwsBudgetsBudgetActionArgsSubscriber {
  address: string;
  subscription_type: string;
}
export interface AwsBudgetsBudgetActionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsBudgetsBudgetActionArgs {
  action_type: string;
  approval_model: string;
  budget_name: string;
  execution_role_arn: string;
  notification_type: string;
  tags?: {
    [key: string]: string;
  };
  action_threshold: AwsBudgetsBudgetActionArgsActionThreshold;
  definition: AwsBudgetsBudgetActionArgsDefinition;
  subscriber: AwsBudgetsBudgetActionArgsSubscriber;
  timeouts?: AwsBudgetsBudgetActionArgsTimeouts;
}
export class aws_budgets_budget_action extends TerraformResource {
  readonly account_id?: string;
  readonly action_id!: string;
  readonly arn!: string;
  readonly id?: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsBudgetsBudgetActionArgs) {
    super(config, "resource", args, resourceName, "aws_budgets_budget_action");
  }
}