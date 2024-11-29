import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGrafanaWorkspaceApiKeyArgs {
  key_name: string;
  key_role: string;
  seconds_to_live: number;
  workspace_id: string;
}
export class aws_grafana_workspace_api_key extends TerraformResource {
  readonly id?: string;
  readonly key!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceApiKeyArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_workspace_api_key");
  }
}