import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCloudcontrolapiResourceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudcontrolapiResourceArgs {
  desired_state: string;
  role_arn?: string;
  type_name: string;
  type_version_id?: string;
  timeouts: AwsCloudcontrolapiResourceArgstimeouts;
}
export class aws_cloudcontrolapi_resource extends TerraformResource {
  readonly id?: string;
  readonly properties!: string;
  readonly schema?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudcontrolapiResourceArgs) {
    super(config, "resource", args, resourceName, "aws_cloudcontrolapi_resource");
  }
}