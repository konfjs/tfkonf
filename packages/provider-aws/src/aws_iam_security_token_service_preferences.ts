import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsIamSecurityTokenServicePreferencesArgs {
  global_endpoint_token_version: string;
}
export class aws_iam_security_token_service_preferences extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsIamSecurityTokenServicePreferencesArgs) {
    super(config, "resource", args, resourceName, "aws_iam_security_token_service_preferences");
  }
}