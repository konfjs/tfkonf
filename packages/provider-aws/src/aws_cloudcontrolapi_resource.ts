import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudcontrolapiResourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsCloudcontrolapiResourceArgs {
  desired_state: string;
  role_arn?: string;
  type_name: string;
  type_version_id?: string;
  timeouts?: AwsCloudcontrolapiResourceArgsTimeouts;
}

export class aws_cloudcontrolapi_resource extends TerraformResource {
  readonly id?: string;
  readonly properties!: string;
  readonly schema?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudcontrolapiResourceArgs) {
    super(config, "resource", args, resourceName, "aws_cloudcontrolapi_resource");
  }
}
