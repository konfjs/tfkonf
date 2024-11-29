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
export interface AwsCodepipelineArgsstageaction {
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
export interface AwsCodepipelineArgsstage {
  name: string;
  action: AwsCodepipelineArgsstageaction;
}
export interface AwsCodepipelineArgstriggerGitConfigurationPullRequestbranches {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgstriggerGitConfigurationPullRequestFilePaths {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgstriggerGitConfigurationPullRequest {
  events?: string[];
  branches: AwsCodepipelineArgstriggerGitConfigurationPullRequestbranches;
  file_paths: AwsCodepipelineArgstriggerGitConfigurationPullRequestFilePaths;
}
export interface AwsCodepipelineArgstriggerGitConfigurationpushbranches {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgstriggerGitConfigurationpushFilePaths {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgstriggerGitConfigurationpushtags {
  excludes?: string[];
  includes?: string[];
}
export interface AwsCodepipelineArgstriggerGitConfigurationpush {
  branches: AwsCodepipelineArgstriggerGitConfigurationpushbranches;
  file_paths: AwsCodepipelineArgstriggerGitConfigurationpushFilePaths;
  tags: AwsCodepipelineArgstriggerGitConfigurationpushtags;
}
export interface AwsCodepipelineArgstriggerGitConfiguration {
  source_action_name: string;
  pull_request: AwsCodepipelineArgstriggerGitConfigurationPullRequest;
  push: AwsCodepipelineArgstriggerGitConfigurationpush;
}
export interface AwsCodepipelineArgstrigger {
  provider_type: string;
  git_configuration: AwsCodepipelineArgstriggerGitConfiguration;
}
export interface AwsCodepipelineArgsvariable {
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
  stage: AwsCodepipelineArgsstage;
  trigger: AwsCodepipelineArgstrigger;
  variable: AwsCodepipelineArgsvariable;
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