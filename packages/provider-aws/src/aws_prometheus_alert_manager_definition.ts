import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsPrometheusAlertManagerDefinitionArgs {
  definition: string;
  workspace_id: string;
}
export class aws_prometheus_alert_manager_definition extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsPrometheusAlertManagerDefinitionArgs) {
    super(config, "resource", args, resourceName, "aws_prometheus_alert_manager_definition");
  }
}