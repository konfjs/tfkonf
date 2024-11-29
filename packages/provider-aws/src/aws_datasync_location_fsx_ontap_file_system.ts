import { TerraformConfig, TerraformResource } from "tfs";
export interface MountOptions {
  version?: string;
}
export interface Nfs {
  mount_options: MountOptions;
}
export interface MountOptions {
  version?: string;
}
export interface Smb {
  domain?: string;
  password: string;
  user: string;
  mount_options: MountOptions;
}
export interface Protocol {
  nfs: Nfs;
  smb: Smb;
}
export interface AwsDatasyncLocationFsxOntapFileSystemArgs {
  security_group_arns: string[];
  storage_virtual_machine_arn: string;
  tags?: {
    [key: string]: string;
  };
  protocol: Protocol;
}
export class aws_datasync_location_fsx_ontap_file_system extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly fsx_filesystem_arn!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxOntapFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_fsx_ontap_file_system");
  }
}