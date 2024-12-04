import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLambdaLayerVersionPermissionArgs {
  action: string;
  layer_name: string;
  organization_id?: string;
  principal: string;
  skip_destroy?: boolean;
  statement_id: string;
  version_number: number;
}

export class aws_lambda_layer_version_permission extends TerraformResource {
  readonly id?: string;
  readonly policy!: string;
  readonly revision_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsLambdaLayerVersionPermissionArgs) {
    super(config, "resource", args, resourceName, "aws_lambda_layer_version_permission");
  }
}
