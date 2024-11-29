import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsGrafanaRoleAssociationArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsGrafanaRoleAssociationArgs {
  group_ids?: string[];
  role: string;
  user_ids?: string[];
  workspace_id: string;
  timeouts: AwsGrafanaRoleAssociationArgstimeouts;
}
export class aws_grafana_role_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaRoleAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_role_association");
  }
}