import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudbuildBitbucketServerConfigArgsConnectedRepositories {
  project_key: string;
  repo_slug: string;
}
export interface GoogleCloudbuildBitbucketServerConfigArgssecrets {
  admin_access_token_version_name: string;
  read_access_token_version_name: string;
  webhook_secret_version_name: string;
}
export interface GoogleCloudbuildBitbucketServerConfigArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudbuildBitbucketServerConfigArgs {
  api_key: string;
  config_id: string;
  host_uri: string;
  location: string;
  peered_network?: string;
  ssl_ca?: string;
  username: string;
  connected_repositories: GoogleCloudbuildBitbucketServerConfigArgsConnectedRepositories;
  secrets: GoogleCloudbuildBitbucketServerConfigArgssecrets;
  timeouts: GoogleCloudbuildBitbucketServerConfigArgstimeouts;
}
export class google_cloudbuild_bitbucket_server_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly webhook_key!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudbuildBitbucketServerConfigArgs) {
    super(config, "resource", args, resourceName, "google_cloudbuild_bitbucket_server_config");
  }
}