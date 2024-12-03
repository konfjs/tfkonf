import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGrafanaWorkspaceServiceAccountTokenArgs {
  name: string;
  seconds_to_live: number;
  service_account_id: string;
  workspace_id: string;
}
export class aws_grafana_workspace_service_account_token extends TerraformResource {
  readonly created_at!: string;
  readonly expires_at!: string;
  readonly id!: string;
  readonly key!: string;
  readonly service_account_token_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceServiceAccountTokenArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_workspace_service_account_token");
  }
}