import { TerraformConfig, TerraformResource } from "tfs";
export interface ContentSourceConfiguration {
  data_source_ids?: string[];
  direct_put_content?: boolean;
  faq_ids?: string[];
}
export interface UserIdentityConfiguration {
  identity_attribute_name: string;
}
export interface Configuration {
  content_source_configuration: ContentSourceConfiguration;
  user_identity_configuration: UserIdentityConfiguration;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsKendraExperienceArgs {
  description?: string;
  index_id: string;
  name: string;
  role_arn: string;
  configuration: Configuration;
  timeouts: Timeouts;
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