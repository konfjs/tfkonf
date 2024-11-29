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
export interface Timeouts {
  delete?: string;
}
export interface AwsTransferUserArgs {
  home_directory?: string;
  home_directory_type?: string;
  policy?: string;
  role: string;
  server_id: string;
  tags?: {
    [key: string]: string;
  };
  user_name: string;
  home_directory_mappings: HomeDirectoryMappings;
  posix_profile: PosixProfile;
  timeouts: Timeouts;
}
export class aws_transfer_user extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferUserArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_user");
  }
}