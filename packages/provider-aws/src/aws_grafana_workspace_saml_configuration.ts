import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsGrafanaWorkspaceSamlConfigurationArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsGrafanaWorkspaceSamlConfigurationArgs {
  admin_role_values?: string[];
  allowed_organizations?: string[];
  editor_role_values: string[];
  groups_assertion?: string;
  idp_metadata_url?: string;
  idp_metadata_xml?: string;
  org_assertion?: string;
  role_assertion?: string;
  workspace_id: string;
  timeouts?: AwsGrafanaWorkspaceSamlConfigurationArgsTimeouts;
}
export class aws_grafana_workspace_saml_configuration extends TerraformResource {
  readonly email_assertion?: string;
  readonly id?: string;
  readonly login_assertion?: string;
  readonly login_validity_duration?: number;
  readonly name_assertion?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceSamlConfigurationArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_workspace_saml_configuration");
  }
}