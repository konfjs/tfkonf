import { TerraformConfig, TerraformResource } from "tfs";
export interface AuthorizerCredential {
  user_token_secret_version: string;
}
export interface ReadAuthorizerCredential {
  user_token_secret_version: string;
}
export interface BitbucketCloudConfig {
  webhook_secret_secret_version: string;
  workspace: string;
  authorizer_credential: AuthorizerCredential;
  read_authorizer_credential: ReadAuthorizerCredential;
}
export interface AuthorizerCredential {
  user_token_secret_version: string;
}
export interface ReadAuthorizerCredential {
  user_token_secret_version: string;
}
export interface ServiceDirectoryConfig {
  service: string;
}
export interface BitbucketDataCenterConfig {
  host_uri: string;
  ssl_ca?: string;
  webhook_secret_secret_version: string;
  authorizer_credential: AuthorizerCredential;
  read_authorizer_credential: ReadAuthorizerCredential;
  service_directory_config: ServiceDirectoryConfig;
}
export interface AuthorizerCredential {
  oauth_token_secret_version?: string;
}
export interface GithubConfig {
  app_installation_id?: number;
  authorizer_credential: AuthorizerCredential;
}
export interface ServiceDirectoryConfig {
  service: string;
}
export interface GithubEnterpriseConfig {
  app_id?: number;
  app_installation_id?: number;
  app_slug?: string;
  host_uri: string;
  private_key_secret_version?: string;
  ssl_ca?: string;
  webhook_secret_secret_version?: string;
  service_directory_config: ServiceDirectoryConfig;
}
export interface AuthorizerCredential {
  user_token_secret_version: string;
}
export interface ReadAuthorizerCredential {
  user_token_secret_version: string;
}
export interface ServiceDirectoryConfig {
  service: string;
}
export interface GitlabConfig {
  ssl_ca?: string;
  webhook_secret_secret_version: string;
  authorizer_credential: AuthorizerCredential;
  read_authorizer_credential: ReadAuthorizerCredential;
  service_directory_config: ServiceDirectoryConfig;
}
export interface Timeouts {
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
  bitbucket_cloud_config: BitbucketCloudConfig;
  bitbucket_data_center_config: BitbucketDataCenterConfig;
  github_config: GithubConfig;
  github_enterprise_config: GithubEnterpriseConfig;
  gitlab_config: GitlabConfig;
  timeouts: Timeouts;
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