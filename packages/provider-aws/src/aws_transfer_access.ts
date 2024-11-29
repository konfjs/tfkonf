import { TerraformConfig, TerraformResource } from "tfs";
export interface HomeDirectoryMappings {
  entry: string;
  target: string;
}
export interface PosixProfile {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}
export interface AwsTransferAccessArgs {
  external_id: string;
  home_directory?: string;
  home_directory_type?: string;
  policy?: string;
  role?: string;
  server_id: string;
  home_directory_mappings: HomeDirectoryMappings;
  posix_profile: PosixProfile;
}
export class aws_transfer_access extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferAccessArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_access");
  }
}