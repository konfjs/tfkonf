import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigAuthorizerCredential {
  user_token_secret_version: string;
}
export interface GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigReadAuthorizerCredential {
  user_token_secret_version: string;
}
export interface GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfig {
  webhook_secret_secret_version: string;
  workspace: string;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigAuthorizerCredential;
  read_authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfigReadAuthorizerCredential;
}
export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigAuthorizerCredential {
  user_token_secret_version: string;
}
export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigReadAuthorizerCredential {
  user_token_secret_version: string;
}
export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigServiceDirectoryConfig {
  service: string;
}
export interface GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfig {
  host_uri: string;
  ssl_ca?: string;
  webhook_secret_secret_version: string;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigAuthorizerCredential;
  read_authorizer_credential: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigReadAuthorizerCredential;
  service_directory_config: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfigServiceDirectoryConfig;
}
export interface GoogleCloudbuildv2ConnectionArgsGithubConfigAuthorizerCredential {
  oauth_token_secret_version?: string;
}
export interface GoogleCloudbuildv2ConnectionArgsGithubConfig {
  app_installation_id?: number;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsGithubConfigAuthorizerCredential;
}
export interface GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfigServiceDirectoryConfig {
  service: string;
}
export interface GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfig {
  app_id?: number;
  app_installation_id?: number;
  app_slug?: string;
  host_uri: string;
  private_key_secret_version?: string;
  ssl_ca?: string;
  webhook_secret_secret_version?: string;
  service_directory_config: GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfigServiceDirectoryConfig;
}
export interface GoogleCloudbuildv2ConnectionArgsGitlabConfigAuthorizerCredential {
  user_token_secret_version: string;
}
export interface GoogleCloudbuildv2ConnectionArgsGitlabConfigReadAuthorizerCredential {
  user_token_secret_version: string;
}
export interface GoogleCloudbuildv2ConnectionArgsGitlabConfigServiceDirectoryConfig {
  service: string;
}
export interface GoogleCloudbuildv2ConnectionArgsGitlabConfig {
  ssl_ca?: string;
  webhook_secret_secret_version: string;
  authorizer_credential: GoogleCloudbuildv2ConnectionArgsGitlabConfigAuthorizerCredential;
  read_authorizer_credential: GoogleCloudbuildv2ConnectionArgsGitlabConfigReadAuthorizerCredential;
  service_directory_config: GoogleCloudbuildv2ConnectionArgsGitlabConfigServiceDirectoryConfig;
}
export interface GoogleCloudbuildv2ConnectionArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudbuildv2ConnectionArgs {
  annotations?: {
    [key: string]: string;
  };
  disabled?: boolean;
  location: string;
  name: string;
  bitbucket_cloud_config: GoogleCloudbuildv2ConnectionArgsBitbucketCloudConfig;
  bitbucket_data_center_config: GoogleCloudbuildv2ConnectionArgsBitbucketDataCenterConfig;
  github_config: GoogleCloudbuildv2ConnectionArgsGithubConfig;
  github_enterprise_config: GoogleCloudbuildv2ConnectionArgsGithubEnterpriseConfig;
  gitlab_config: GoogleCloudbuildv2ConnectionArgsGitlabConfig;
  timeouts: GoogleCloudbuildv2ConnectionArgstimeouts;
}
export class google_cloudbuildv2_connection extends TerraformResource {
  readonly create_time!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly installation_state!: any[];
  readonly project?: string;
  readonly reconciling!: boolean;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildv2ConnectionArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuildv2_connection");
  }
}