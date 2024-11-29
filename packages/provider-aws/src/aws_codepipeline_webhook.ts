import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodepipelineWebhookArgsAuthenticationConfiguration {
  allowed_ip_range?: string;
  secret_token?: string;
}
export interface AwsCodepipelineWebhookArgsFilter {
  json_path: string;
  match_equals: string;
}
export interface AwsCodepipelineWebhookArgs {
  authentication: string;
  name: string;
  tags?: {
    [key: string]: string;
  };
  target_action: string;
  target_pipeline: string;
  authentication_configuration: AwsCodepipelineWebhookArgsAuthenticationConfiguration;
  filter: AwsCodepipelineWebhookArgsFilter;
}
export class aws_codepipeline_webhook extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly url!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodepipelineWebhookArgs) {
    super(config, "resource", args, resourceName, "aws_codepipeline_webhook");
  }
}