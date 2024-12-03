import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsCodepipelineCustomActionTypeArgsConfigurationProperty {
  description?: string;
  key: boolean;
  name: string;
  queryable?: boolean;
  required: boolean;
  secret: boolean;
  type?: string;
}
export interface AwsCodepipelineCustomActionTypeArgsInputArtifactDetails {
  maximum_count: number;
  minimum_count: number;
}
export interface AwsCodepipelineCustomActionTypeArgsOutputArtifactDetails {
  maximum_count: number;
  minimum_count: number;
}
export interface AwsCodepipelineCustomActionTypeArgsSettings {
  entity_url_template?: string;
  execution_url_template?: string;
  revision_url_template?: string;
  third_party_configuration_url?: string;
}
export interface AwsCodepipelineCustomActionTypeArgs {
  category: string;
  provider_name: string;
  tags?: {
    [key: string]: string;
  };
  version: string;
  configuration_property: AwsCodepipelineCustomActionTypeArgsConfigurationProperty;
  input_artifact_details: AwsCodepipelineCustomActionTypeArgsInputArtifactDetails;
  output_artifact_details: AwsCodepipelineCustomActionTypeArgsOutputArtifactDetails;
  settings: AwsCodepipelineCustomActionTypeArgsSettings;
}
export class aws_codepipeline_custom_action_type extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodepipelineCustomActionTypeArgs) {
    super(config, "resource", args, resourceName, "aws_codepipeline_custom_action_type");
  }
}