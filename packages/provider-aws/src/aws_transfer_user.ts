import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsTransferUserArgsHomeDirectoryMappings {
  entry: string;
  target: string;
}
export interface AwsTransferUserArgsPosixProfile {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}
export interface AwsTransferUserArgsTimeouts {
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
  home_directory_mappings: AwsTransferUserArgsHomeDirectoryMappings;
  posix_profile: AwsTransferUserArgsPosixProfile;
  timeouts: AwsTransferUserArgsTimeouts;
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