import { TerraformConfig, TerraformResource } from "tfs";
export interface NetworkAccessControl {
  prefix_list_ids: string[];
  vpce_ids: string[];
}
export interface Timeouts {
  create?: string;
  update?: string;
}
export interface VpcConfiguration {
  security_group_ids: string[];
  subnet_ids: string[];
}
export interface AwsGrafanaWorkspaceArgs {
  account_access_type: string;
  authentication_providers: string[];
  data_sources?: string[];
  description?: string;
  notification_destinations?: string[];
  organization_role_name?: string;
  organizational_units?: string[];
  permission_type: string;
  role_arn?: string;
  stack_set_name?: string;
  tags?: {
    [key: string]: string;
  };
  network_access_control: NetworkAccessControl;
  timeouts: Timeouts;
  vpc_configuration: VpcConfiguration;
}
export class aws_grafana_workspace extends TerraformResource {
  readonly arn!: string;
  readonly configuration?: string;
  readonly endpoint!: string;
  readonly grafana_version?: string;
  readonly id?: string;
  readonly name?: string;
  readonly saml_configuration_status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsGrafanaWorkspaceArgs) {
    super(config, "resource", args, resourceName, "aws_grafana_workspace");
  }
}