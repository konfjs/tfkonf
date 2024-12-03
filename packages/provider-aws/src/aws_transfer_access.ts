import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsTransferAccessArgsHomeDirectoryMappings {
  entry: string;
  target: string;
}
export interface AwsTransferAccessArgsPosixProfile {
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
  home_directory_mappings: AwsTransferAccessArgsHomeDirectoryMappings;
  posix_profile: AwsTransferAccessArgsPosixProfile;
}
export class aws_transfer_access extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsTransferAccessArgs) {
    super(config, "resource", args, resourceName, "aws_transfer_access");
  }
}