import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsBudgetsBudgetActionArgsActionThreshold {
  action_threshold_type: string;
  action_threshold_value: number;
}
export interface AwsBudgetsBudgetActionArgsdefinitionIamActionDefinition {
  groups?: string[];
  policy_arn: string;
  roles?: string[];
  users?: string[];
}
export interface AwsBudgetsBudgetActionArgsdefinitionScpActionDefinition {
  policy_id: string;
  target_ids: string[];
}
export interface AwsBudgetsBudgetActionArgsdefinitionSsmActionDefinition {
  action_sub_type: string;
  instance_ids: string[];
  region: string;
}
export interface AwsBudgetsBudgetActionArgsdefinition {
  iam_action_definition: AwsBudgetsBudgetActionArgsdefinitionIamActionDefinition;
  scp_action_definition: AwsBudgetsBudgetActionArgsdefinitionScpActionDefinition;
  ssm_action_definition: AwsBudgetsBudgetActionArgsdefinitionSsmActionDefinition;
}
export interface AwsBudgetsBudgetActionArgssubscriber {
  address: string;
  subscription_type: string;
}
export interface AwsBudgetsBudgetActionArgstimeouts {
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
  definition: AwsBudgetsBudgetActionArgsdefinition;
  subscriber: AwsBudgetsBudgetActionArgssubscriber;
  timeouts: AwsBudgetsBudgetActionArgstimeouts;
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