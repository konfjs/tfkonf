import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodebuildSourceCredentialArgs {
  auth_type: string;
  server_type: string;
  token: string;
  user_name?: string;
}
export class aws_codebuild_source_credential extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodebuildSourceCredentialArgs) {
    super(config, "resource", args, resourceName, "aws_codebuild_source_credential");
  }
}