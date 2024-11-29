import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfsMountOptions {
  version?: string;
}
export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfs {
  mount_options: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfsMountOptions;
}
export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmbMountOptions {
  version?: string;
}
export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmb {
  domain?: string;
  password: string;
  user: string;
  mount_options: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmbMountOptions;
}
export interface AwsDatasyncLocationFsxOntapFileSystemArgsProtocol {
  nfs: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolNfs;
  smb: AwsDatasyncLocationFsxOntapFileSystemArgsProtocolSmb;
}
export interface AwsDatasyncLocationFsxOntapFileSystemArgs {
  security_group_arns: string[];
  storage_virtual_machine_arn: string;
  tags?: {
    [key: string]: string;
  };
  protocol: AwsDatasyncLocationFsxOntapFileSystemArgsProtocol;
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