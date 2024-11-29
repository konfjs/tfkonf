import { TerraformConfig, TerraformResource } from "tfs";
export interface PosixUser {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}
export interface CreationInfo {
  owner_gid: number;
  owner_uid: number;
  permissions: string;
}
export interface RootDirectory {
  creation_info: CreationInfo;
}
export interface AwsEfsAccessPointArgs {
  file_system_id: string;
  tags?: {
    [key: string]: string;
  };
  posix_user: PosixUser;
  root_directory: RootDirectory;
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