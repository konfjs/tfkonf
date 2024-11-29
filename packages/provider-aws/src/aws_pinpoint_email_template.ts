import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPinpointEmailTemplateArgsEmailTemplateHeader {
  name?: string;
  value?: string;
}
export interface AwsPinpointEmailTemplateArgsEmailTemplate {
  default_substitutions?: string;
  description?: string;
  html_part?: string;
  recommender_id?: string;
  subject?: string;
  text_part?: string;
  header: AwsPinpointEmailTemplateArgsEmailTemplateHeader;
}
export interface AwsPinpointEmailTemplateArgs {
  tags?: {
    [key: string]: string;
  };
  template_name: string;
  email_template: AwsPinpointEmailTemplateArgsEmailTemplate;
}
export class aws_pinpoint_email_template extends TerraformResource {
  readonly arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPinpointEmailTemplateArgs) {
    super(config, "resource", args, resourceName, "aws_pinpoint_email_template");
  }
}