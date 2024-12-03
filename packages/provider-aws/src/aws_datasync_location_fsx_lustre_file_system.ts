import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDatasyncLocationFsxLustreFileSystemArgs {
  fsx_filesystem_arn: string;
  security_group_arns: string[];
  tags?: {
    [key: string]: string;
  };
}
export class aws_datasync_location_fsx_lustre_file_system extends TerraformResource {
  readonly arn!: string;
  readonly creation_time!: string;
  readonly id?: string;
  readonly subdirectory?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly uri!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatasyncLocationFsxLustreFileSystemArgs) {
    super(config, "resource", args, resourceName, "aws_datasync_location_fsx_lustre_file_system");
  }
}