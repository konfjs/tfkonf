import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDatazoneEnvironmentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDatazoneEnvironmentArgsUserParameters {
  name?: string;
  value?: string;
}
export interface AwsDatazoneEnvironmentArgs {
  description?: string;
  domain_identifier: string;
  glossary_terms?: string[];
  name: string;
  profile_identifier: string;
  project_identifier: string;
  timeouts: AwsDatazoneEnvironmentArgstimeouts;
  user_parameters: AwsDatazoneEnvironmentArgsUserParameters;
}
export class aws_datazone_environment extends TerraformResource {
  readonly account_identifier?: string;
  readonly account_region?: string;
  readonly blueprint_identifier?: string;
  readonly created_at!: string;
  readonly created_by!: string;
  readonly id!: string;
  readonly last_deployment!: any[];
  readonly provider_environment!: string;
  readonly provisioned_resources!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneEnvironmentArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_environment");
  }
}