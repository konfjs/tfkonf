import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGrafanaWorkspaceServiceAccountArgs {
  grafana_role: string;
  name: string;
  workspace_id: string;
}

export class aws_grafana_workspace_service_account extends TerraformResource {
  readonly id!: string;
  readonly service_account_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceServiceAccountArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_workspace_service_account");
  }
}
