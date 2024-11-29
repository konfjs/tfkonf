import { TerraformConfig, TerraformResource } from "tfs";
export interface EncryptionKey {
  id: string;
  type: string;
}
export interface ArtifactStore {
  location: string;
  region?: string;
  type: string;
  encryption_key: EncryptionKey;
}
export interface Action {
  category: string;
  configuration?: {
    [key: string]: string;
  };
  input_artifacts?: string[];
  name: string;
  namespace?: string;
  output_artifacts?: string[];
  owner: string;
  provider: string;
  role_arn?: string;
  timeout_in_minutes?: number;
  version: string;
}
export interface Stage {
  name: string;
  action: Action;
}
export interface Branches {
  excludes?: string[];
  includes?: string[];
}
export interface FilePaths {
  excludes?: string[];
  includes?: string[];
}
export interface PullRequest {
  events?: string[];
  branches: Branches;
  file_paths: FilePaths;
}
export interface Branches {
  excludes?: string[];
  includes?: string[];
}
export interface FilePaths {
  excludes?: string[];
  includes?: string[];
}
export interface Tags {
  excludes?: string[];
  includes?: string[];
}
export interface Push {
  branches: Branches;
  file_paths: FilePaths;
  tags: Tags;
}
export interface GitConfiguration {
  source_action_name: string;
  pull_request: PullRequest;
  push: Push;
}
export interface Trigger {
  provider_type: string;
  git_configuration: GitConfiguration;
}
export interface Variable {
  default_value?: string;
  description?: string;
  name: string;
}
export interface AwsCodepipelineArgs {
  execution_mode?: string;
  name: string;
  pipeline_type?: string;
  role_arn: string;
  tags?: {
    [key: string]: string;
  };
  artifact_store: ArtifactStore;
  stage: Stage;
  trigger: Trigger;
  variable: Variable;
}
export class aws_codepipeline extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsCodepipelineArgs) {
    super(config, "resource", args, resourceName, "aws_codepipeline");
  }
}