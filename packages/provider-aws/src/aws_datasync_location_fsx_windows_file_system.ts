import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDatasyncLocationFsxWindowsFileSystemArgs {
  domain?: string;
  fsx_filesystem_arn: string;
  password: string;
  security_group_arns: string[];
  tags?: {
    [key: string]: string;
  };
  user: string;
}
export class aws_datasync_location_fsx_windows_file_system extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxWindowsFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_fsx_windows_file_system");
  }
}