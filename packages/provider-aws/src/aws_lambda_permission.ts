import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsLambdaPermissionArgs {
  action: string;
  event_source_token?: string;
  function_name: string;
  function_url_auth_type?: string;
  principal: string;
  principal_org_id?: string;
  qualifier?: string;
  source_account?: string;
  source_arn?: string;
}
export class aws_lambda_permission extends TerraformResource {
  readonly id?: string;
  readonly statement_id?: string;
  readonly statement_id_prefix?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaPermissionArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_permission");
  }
}