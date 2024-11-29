import { TerraformConfig, TerraformResource } from "tfs";
export interface AllUpdatesRule {
  disable_default_iam_recipients?: boolean;
  enable_project_level_recipients?: boolean;
  monitoring_notification_channels?: string[];
  pubsub_topic?: string;
  schema_version?: string;
}
export interface SpecifiedAmount {
  nanos?: number;
  units?: string;
}
export interface Amount {
  last_period_amount?: boolean;
  specified_amount: SpecifiedAmount;
}
export interface EndDate {
  day: number;
  month: number;
  year: number;
}
export interface StartDate {
  day: number;
  month: number;
  year: number;
}
export interface CustomPeriod {
  end_date: EndDate;
  start_date: StartDate;
}
export interface BudgetFilter {
  calendar_period?: string;
  credit_types_treatment?: string;
  projects?: string[];
  resource_ancestors?: string[];
  custom_period: CustomPeriod;
}
export interface ThresholdRules {
  spend_basis?: string;
  threshold_percent: number;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleBillingBudgetArgs {
  billing_account: string;
  display_name?: string;
  ownership_scope?: string;
  all_updates_rule: AllUpdatesRule;
  amount: Amount;
  budget_filter: BudgetFilter;
  threshold_rules: ThresholdRules;
  timeouts: Timeouts;
}
export class google_billing_budget extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleBillingBudgetArgs) {
    super(config, "resource", args, resourceName, "google_billing_budget");
  }
}