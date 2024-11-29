import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsCodepipelineArgsArtifactStoreEncryptionKey {
  id: string;
  type: string;
}
export interface AwsCodepipelineArgsArtifactStore {
  location: string;
  region?: string;
  type: string;
  encryption_key: AwsCodepipelineArgsArtifactStoreEncryptionKey;
}
export interface AwsCodepipelineArgsStageAction {
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
export interface AwsCodepipelineArgsStage {
  name: string;
  action: AwsCodepipelineArgsStageAction;
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPullRequestBranches {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPullRequestFilePaths {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPullRequest {
  events?: string[];
  branches: AwsCodepipelineArgsTriggerGitConfigurationPullRequestBranches;
  file_paths: AwsCodepipelineArgsTriggerGitConfigurationPullRequestFilePaths;
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPushBranches {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPushFilePaths {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPushTags {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgsTriggerGitConfigurationPush {
  branches: AwsCodepipelineArgsTriggerGitConfigurationPushBranches;
  file_paths: AwsCodepipelineArgsTriggerGitConfigurationPushFilePaths;
  tags: AwsCodepipelineArgsTriggerGitConfigurationPushTags;
}
export interface AwsCodepipelineArgsTriggerGitConfiguration {
  source_action_name: string;
  pull_request: AwsCodepipelineArgsTriggerGitConfigurationPullRequest;
  push: AwsCodepipelineArgsTriggerGitConfigurationPush;
}
export interface AwsCodepipelineArgsTrigger {
  provider_type: string;
  git_configuration: AwsCodepipelineArgsTriggerGitConfiguration;
}
export interface AwsCodepipelineArgsVariable {
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
  artifact_store: AwsCodepipelineArgsArtifactStore;
  stage: AwsCodepipelineArgsStage;
  trigger: AwsCodepipelineArgsTrigger;
  variable: AwsCodepipelineArgsVariable;
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