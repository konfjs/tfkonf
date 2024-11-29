import { TerraformConfig, TerraformResource } from "tfs";
export interface ActionThreshold {
  action_threshold_type: string;
  action_threshold_value: number;
}
export interface IamActionDefinition {
  groups?: string[];
  policy_arn: string;
  roles?: string[];
  users?: string[];
}
export interface ScpActionDefinition {
  policy_id: string;
  target_ids: string[];
}
export interface SsmActionDefinition {
  action_sub_type: string;
  instance_ids: string[];
  region: string;
}
export interface Definition {
  iam_action_definition: IamActionDefinition;
  scp_action_definition: ScpActionDefinition;
  ssm_action_definition: SsmActionDefinition;
}
export interface Subscriber {
  address: string;
  subscription_type: string;
}
export interface Timeouts {
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
  action_threshold: ActionThreshold;
  definition: Definition;
  subscriber: Subscriber;
  timeouts: Timeouts;
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