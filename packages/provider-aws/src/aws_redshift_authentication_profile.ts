import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftAuthenticationProfileArgs {
  authentication_profile_content: string;
  authentication_profile_name: string;
}

export class aws_redshift_authentication_profile extends TerraformResource {
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftAuthenticationProfileArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_authentication_profile");
  }
}
