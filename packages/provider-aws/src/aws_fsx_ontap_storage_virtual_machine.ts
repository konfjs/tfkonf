import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
  dns_ips: string[];
  domain_name: string;
  file_system_administrators_group?: string;
  organizational_unit_distinguished_name?: string;
  password: string;
  username: string;
}
export interface AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfiguration {
  netbios_name?: string;
  self_managed_active_directory_configuration: AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}
export interface AwsFsxOntapStorageVirtualMachineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsFsxOntapStorageVirtualMachineArgs {
  file_system_id: string;
  name: string;
  root_volume_security_style?: string;
  svm_admin_password?: string;
  tags?: {
    [key: string]: string;
  };
  active_directory_configuration: AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfiguration;
  timeouts?: AwsFsxOntapStorageVirtualMachineArgsTimeouts;
}
export class aws_fsx_ontap_storage_virtual_machine extends TerraformResource {
  readonly arn!: string;
  readonly endpoints!: any[];
  readonly id?: string;
  readonly subtype!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uuid!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsFsxOntapStorageVirtualMachineArgs) {
    super(config, "resource", args, resourceName, "aws_fsx_ontap_storage_virtual_machine");
  }
}