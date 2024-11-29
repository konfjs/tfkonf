import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDatazoneEnvironmentProfileArgsUserParameters {
  name?: string;
  value?: string;
}
export interface AwsDatazoneEnvironmentProfileArgs {
  aws_account_region: string;
  domain_identifier: string;
  environment_blueprint_identifier: string;
  name: string;
  project_identifier: string;
  user_parameters: AwsDatazoneEnvironmentProfileArgsUserParameters;
}
export class aws_datazone_environment_profile extends TerraformResource {
  readonly aws_account_id?: string;
  readonly created_at!: string;
  readonly created_by!: string;
  readonly description?: string;
  readonly id!: string;
  readonly updated_at!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneEnvironmentProfileArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_environment_profile");
  }
}