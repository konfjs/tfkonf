import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsEfsAccessPointArgsPosixUser {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}
export interface AwsEfsAccessPointArgsRootDirectoryCreationInfo {
  owner_gid: number;
  owner_uid: number;
  permissions: string;
}
export interface AwsEfsAccessPointArgsRootDirectory {
  creation_info: AwsEfsAccessPointArgsRootDirectoryCreationInfo;
}
export interface AwsEfsAccessPointArgs {
  file_system_id: string;
  tags?: {
    [key: string]: string;
  };
  posix_user: AwsEfsAccessPointArgsPosixUser;
  root_directory: AwsEfsAccessPointArgsRootDirectory;
}
export class aws_efs_access_point extends TerraformResource {
  readonly arn!: string;
  readonly file_system_arn!: string;
  readonly id?: string;
  readonly owner_id!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsEfsAccessPointArgs) {
    super(config, "resource", args, resourceName, "aws_efs_access_point");
  }
}