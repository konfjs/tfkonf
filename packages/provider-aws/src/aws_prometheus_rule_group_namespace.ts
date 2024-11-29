import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPrometheusRuleGroupNamespaceArgs {
  data: string;
  name: string;
  workspace_id: string;
}
export class aws_prometheus_rule_group_namespace extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPrometheusRuleGroupNamespaceArgs) {
    super(config, "resource", args, resourceName, "aws_prometheus_rule_group_namespace");
  }
}