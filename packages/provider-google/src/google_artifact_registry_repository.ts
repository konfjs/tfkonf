import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleArtifactRegistryRepositoryArgsCleanupPoliciesCondition {
  newer_than?: string;
  older_than?: string;
  package_name_prefixes?: string[];
  tag_prefixes?: string[];
  tag_state?: string;
  version_name_prefixes?: string[];
}

export interface GoogleArtifactRegistryRepositoryArgsCleanupPoliciesMostRecentVersions {
  keep_count?: number;
  package_name_prefixes?: string[];
}

export interface GoogleArtifactRegistryRepositoryArgsCleanupPolicies {
  action?: string;
  id: string;
  condition: GoogleArtifactRegistryRepositoryArgsCleanupPoliciesCondition;
  most_recent_versions: GoogleArtifactRegistryRepositoryArgsCleanupPoliciesMostRecentVersions;
}

export interface GoogleArtifactRegistryRepositoryArgsDockerConfig {
  immutable_tags?: boolean;
}

export interface GoogleArtifactRegistryRepositoryArgsMavenConfig {
  allow_snapshot_overwrites?: boolean;
  version_policy?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigAptRepositoryPublicRepository {
  repository_base: string;
  repository_path: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigAptRepository {
  public_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigAptRepositoryPublicRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigCommonRepository {
  uri: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigDockerRepositoryCustomRepository {
  uri?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigDockerRepository {
  public_repository?: string;
  custom_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigDockerRepositoryCustomRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigMavenRepositoryCustomRepository {
  uri?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigMavenRepository {
  public_repository?: string;
  custom_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigMavenRepositoryCustomRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigNpmRepositoryCustomRepository {
  uri?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigNpmRepository {
  public_repository?: string;
  custom_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigNpmRepositoryCustomRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigPythonRepositoryCustomRepository {
  uri?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigPythonRepository {
  public_repository?: string;
  custom_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigPythonRepositoryCustomRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials {
  password_secret_version?: string;
  username?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigUpstreamCredentials {
  username_password_credentials: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigYumRepositoryPublicRepository {
  repository_base: string;
  repository_path: string;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigYumRepository {
  public_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigYumRepositoryPublicRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfig {
  description?: string;
  disable_upstream_validation?: boolean;
  apt_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigAptRepository;
  common_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigCommonRepository;
  docker_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigDockerRepository;
  maven_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigMavenRepository;
  npm_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigNpmRepository;
  python_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigPythonRepository;
  upstream_credentials: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigUpstreamCredentials;
  yum_repository: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfigYumRepository;
}

export interface GoogleArtifactRegistryRepositoryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsVirtualRepositoryConfigUpstreamPolicies {
  id?: string;
  priority?: number;
  repository?: string;
}

export interface GoogleArtifactRegistryRepositoryArgsVirtualRepositoryConfig {
  upstream_policies: GoogleArtifactRegistryRepositoryArgsVirtualRepositoryConfigUpstreamPolicies;
}

export interface GoogleArtifactRegistryRepositoryArgs {
  cleanup_policy_dry_run?: boolean;
  description?: string;
  format: string;
  kms_key_name?: string;
  labels?: { [key: string]: string };
  mode?: string;
  repository_id: string;
  cleanup_policies: GoogleArtifactRegistryRepositoryArgsCleanupPolicies;
  docker_config: GoogleArtifactRegistryRepositoryArgsDockerConfig;
  maven_config: GoogleArtifactRegistryRepositoryArgsMavenConfig;
  remote_repository_config: GoogleArtifactRegistryRepositoryArgsRemoteRepositoryConfig;
  timeouts?: GoogleArtifactRegistryRepositoryArgsTimeouts;
  virtual_repository_config: GoogleArtifactRegistryRepositoryArgsVirtualRepositoryConfig;
}

export class google_artifact_registry_repository extends TerraformResource {
  readonly create_time!: string;
  readonly effective_labels!: { [key: string]: string };
  readonly id?: string;
  readonly location?: string;
  readonly name!: string;
  readonly project?: string;
  readonly terraform_labels!: { [key: string]: string };
  readonly update_time!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleArtifactRegistryRepositoryArgs) {
    super(config, "resource", args, resourceName, "google_artifact_registry_repository");
  }
}
