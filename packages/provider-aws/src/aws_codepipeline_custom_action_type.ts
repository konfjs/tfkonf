import { TerraformConfig, TerraformResource } from "tfs";
export interface ConfigurationProperty {
  description?: string;
  key: boolean;
  name: string;
  queryable?: boolean;
  required: boolean;
  secret: boolean;
  type?: string;
}
export interface InputArtifactDetails {
  maximum_count: number;
  minimum_count: number;
}
export interface OutputArtifactDetails {
  maximum_count: number;
  minimum_count: number;
}
export interface Settings {
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
  configuration_property: ConfigurationProperty;
  input_artifact_details: InputArtifactDetails;
  output_artifact_details: OutputArtifactDetails;
  settings: Settings;
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