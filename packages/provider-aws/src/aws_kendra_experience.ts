import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsKendraExperienceArgsConfigurationContentSourceConfiguration {
  data_source_ids?: string[];
  direct_put_content?: boolean;
  faq_ids?: string[];
}
export interface AwsKendraExperienceArgsConfigurationUserIdentityConfiguration {
  identity_attribute_name: string;
}
export interface AwsKendraExperienceArgsConfiguration {
  content_source_configuration: AwsKendraExperienceArgsConfigurationContentSourceConfiguration;
  user_identity_configuration: AwsKendraExperienceArgsConfigurationUserIdentityConfiguration;
}
export interface AwsKendraExperienceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKendraExperienceArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  configuration: AwsKendraExperienceArgsConfiguration;
  timeouts?: AwsKendraExperienceArgsTimeouts;
}
export class aws_kendra_experience extends TerraformResource {
  readonly arn!: string;
  readonly endpoints!: any[];
  readonly experience_id!: string;
  readonly id?: string;
  readonly status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsKendraExperienceArgs) {
    super(config, "resource", args, resourceName, "aws_kendra_experience");
  }
}