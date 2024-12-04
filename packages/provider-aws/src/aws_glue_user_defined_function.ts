import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlueUserDefinedFunctionArgsResourceUris {
  resource_type: string;
  uri: string;
}

export interface AwsGlueUserDefinedFunctionArgs {
  catalog_id?: string;
  class_name: string;
  database_name: string;
  name: string;
  owner_name: string;
  owner_type: string;
  resource_uris: AwsGlueUserDefinedFunctionArgsResourceUris;
}

export class aws_glue_user_defined_function extends TerraformResource {
  readonly arn!: string;
  readonly create_time!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsGlueUserDefinedFunctionArgs) {
    super(config, "resource", args, resourceName, "aws_glue_user_defined_function");
  }
}
