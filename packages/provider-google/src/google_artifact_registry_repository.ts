import { TerraformConfig, TerraformResource } from "tfs";
export interface Condition {
  newer_than?: string;
  older_than?: string;
  package_name_prefixes?: string[];
  tag_prefixes?: string[];
  tag_state?: string;
  version_name_prefixes?: string[];
}
export interface MostRecentVersions {
  keep_count?: number;
  package_name_prefixes?: string[];
}
export interface CleanupPolicies {
  action?: string;
  id: string;
  condition: Condition;
  most_recent_versions: MostRecentVersions;
}
export interface DockerConfig {
  immutable_tags?: boolean;
}
export interface MavenConfig {
  allow_snapshot_overwrites?: boolean;
  version_policy?: string;
}
export interface PublicRepository {
  repository_base: string;
  repository_path: string;
}
export interface AptRepository {
  public_repository: PublicRepository;
}
export interface CommonRepository {
  uri: string;
}
export interface CustomRepository {
  uri?: string;
}
export interface DockerRepository {
  public_repository?: string;
  custom_repository: CustomRepository;
}
export interface CustomRepository {
  uri?: string;
}
export interface MavenRepository {
  public_repository?: string;
  custom_repository: CustomRepository;
}
export interface CustomRepository {
  uri?: string;
}
export interface NpmRepository {
  public_repository?: string;
  custom_repository: CustomRepository;
}
export interface CustomRepository {
  uri?: string;
}
export interface PythonRepository {
  public_repository?: string;
  custom_repository: CustomRepository;
}
export interface UsernamePasswordCredentials {
  password_secret_version?: string;
  username?: string;
}
export interface UpstreamCredentials {
  username_password_credentials: UsernamePasswordCredentials;
}
export interface PublicRepository {
  repository_base: string;
  repository_path: string;
}
export interface YumRepository {
  public_repository: PublicRepository;
}
export interface RemoteRepositoryConfig {
  description?: string;
  disable_upstream_validation?: boolean;
  apt_repository: AptRepository;
  common_repository: CommonRepository;
  docker_repository: DockerRepository;
  maven_repository: MavenRepository;
  npm_repository: NpmRepository;
  python_repository: PythonRepository;
  upstream_credentials: UpstreamCredentials;
  yum_repository: YumRepository;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface UpstreamPolicies {
  id?: string;
  priority?: number;
  repository?: string;
}
export interface VirtualRepositoryConfig {
  upstream_policies: UpstreamPolicies;
}
export interface GoogleArtifactRegistryRepositoryArgs {
  cleanup_policy_dry_run?: boolean;
  description?: string;
  format: string;
  kms_key_name?: string;
  labels?: {
    [key: string]: string;
  };
  mode?: string;
  repository_id: string;
  cleanup_policies: CleanupPolicies;
  docker_config: DockerConfig;
  maven_config: MavenConfig;
  remote_repository_config: RemoteRepositoryConfig;
  timeouts: Timeouts;
  virtual_repository_config: VirtualRepositoryConfig;
}
export class google_artifact_registry_repository extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly location?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleArtifactRegistryRepositoryArgs) {
    super(config, "resource", args, resourceName, "google_artifact_registry_repository");
  }
}