import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsKendraExperienceArgsconfigurationContentSourceConfiguration {
  data_source_ids?: string[];
  direct_put_content?: boolean;
  faq_ids?: string[];
}
export interface AwsKendraExperienceArgsconfigurationUserIdentityConfiguration {
  identity_attribute_name: string;
}
export interface AwsKendraExperienceArgsconfiguration {
  content_source_configuration: AwsKendraExperienceArgsconfigurationContentSourceConfiguration;
  user_identity_configuration: AwsKendraExperienceArgsconfigurationUserIdentityConfiguration;
}
export interface AwsKendraExperienceArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKendraExperienceArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  configuration: AwsKendraExperienceArgsconfiguration;
  timeouts: AwsKendraExperienceArgstimeouts;
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