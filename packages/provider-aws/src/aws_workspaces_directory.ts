import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsWorkspacesDirectoryArgsSamlProperties {
  relay_state_parameter_name?: string;
  status?: string;
  user_access_url?: string;
}
export interface AwsWorkspacesDirectoryArgsSelfServicePermissions {
  change_compute_type?: boolean;
  increase_volume_size?: boolean;
  rebuild_workspace?: boolean;
  restart_workspace?: boolean;
  switch_running_mode?: boolean;
}
export interface AwsWorkspacesDirectoryArgsWorkspaceAccessProperties {
  device_type_android?: string;
  device_type_chromeos?: string;
  device_type_ios?: string;
  device_type_linux?: string;
  device_type_osx?: string;
  device_type_web?: string;
  device_type_windows?: string;
  device_type_zeroclient?: string;
}
export interface AwsWorkspacesDirectoryArgsWorkspaceCreationProperties {
  custom_security_group_id?: string;
  default_ou?: string;
  enable_internet_access?: boolean;
  enable_maintenance_mode?: boolean;
  user_enabled_as_local_administrator?: boolean;
}
export interface AwsWorkspacesDirectoryArgs {
  directory_id: string;
  tags?: {
    [key: string]: string;
  };
  saml_properties: AwsWorkspacesDirectoryArgsSamlProperties;
  self_service_permissions: AwsWorkspacesDirectoryArgsSelfServicePermissions;
  workspace_access_properties: AwsWorkspacesDirectoryArgsWorkspaceAccessProperties;
  workspace_creation_properties: AwsWorkspacesDirectoryArgsWorkspaceCreationProperties;
}
export class aws_workspaces_directory extends TerraformResource {
  readonly alias!: string;
  readonly customer_user_name!: string;
  readonly directory_name!: string;
  readonly directory_type!: string;
  readonly dns_ip_addresses!: string[];
  readonly iam_role_id!: string;
  readonly id?: string;
  readonly ip_group_ids?: string[];
  readonly registration_code!: string;
  readonly subnet_ids?: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly workspace_security_group_id!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsWorkspacesDirectoryArgs) {
    super(config, "resource", args, resourceName, "aws_workspaces_directory");
  }
}