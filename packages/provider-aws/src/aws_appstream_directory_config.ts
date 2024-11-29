import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppstreamDirectoryConfigArgsServiceAccountCredentials {
  account_name: string;
  account_password: string;
}
export interface AwsAppstreamDirectoryConfigArgs {
  directory_name: string;
  organizational_unit_distinguished_names: string[];
  service_account_credentials: AwsAppstreamDirectoryConfigArgsServiceAccountCredentials;
}
export class aws_appstream_directory_config extends TerraformResource {
  readonly created_time!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppstreamDirectoryConfigArgs) {
    super(config, "resource", args, resourceName, "aws_appstream_directory_config");
  }
}