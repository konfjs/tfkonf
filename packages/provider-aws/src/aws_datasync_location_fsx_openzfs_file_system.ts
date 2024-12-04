import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgsProtocolNfsMountOptions {
  version?: string;
}

export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgsProtocolNfs {
  mount_options: AwsDatasyncLocationFsxOpenzfsFileSystemArgsProtocolNfsMountOptions;
}

export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgsProtocol {
  nfs: AwsDatasyncLocationFsxOpenzfsFileSystemArgsProtocolNfs;
}

export interface AwsDatasyncLocationFsxOpenzfsFileSystemArgs {
  fsx_filesystem_arn: string;
  security_group_arns: string[];
  tags?: { [key: string]: string };
  protocol: AwsDatasyncLocationFsxOpenzfsFileSystemArgsProtocol;
}

export class aws_datasync_location_fsx_openzfs_file_system extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: { [key: string]: string };
  readonly uri!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxOpenzfsFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_fsx_openzfs_file_system");
  }
}
