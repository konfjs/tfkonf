import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsTransferUserArgsHomeDirectoryMappings {
  entry: string;
  target: string;
}
export interface AwsTransferUserArgsPosixProfile {
  gid: number;
  secondary_gids?: number[];
  uid: number;
}
export interface AwsTransferUserArgstimeouts {
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
  timeouts: AwsTransferUserArgstimeouts;
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