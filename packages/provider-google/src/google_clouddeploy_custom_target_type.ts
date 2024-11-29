import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGit {
  path?: string;
  ref?: string;
  repo: string;
}
export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo {
  path?: string;
  ref?: string;
  repository: string;
}
export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudStorage {
  path?: string;
  source: string;
}
export interface GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModules {
  configs?: string[];
  git: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGit;
  google_cloud_build_repo: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudBuildRepo;
  google_cloud_storage: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModulesGoogleCloudStorage;
}
export interface GoogleClouddeployCustomTargetTypeArgsCustomActions {
  deploy_action: string;
  render_action?: string;
  include_skaffold_modules: GoogleClouddeployCustomTargetTypeArgsCustomActionsIncludeSkaffoldModules;
}
export interface GoogleClouddeployCustomTargetTypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleClouddeployCustomTargetTypeArgs {
  annotations?: {
    [key: string]: string;
  };
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  custom_actions: GoogleClouddeployCustomTargetTypeArgsCustomActions;
  timeouts: GoogleClouddeployCustomTargetTypeArgsTimeouts;
}
export class google_clouddeploy_custom_target_type extends TerraformResource {
  readonly create_time!: string;
  readonly custom_target_type_id!: string;
  readonly effective_annotations!: {
    [key: string]: string;
  };
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly etag!: string;
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly uid!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployCustomTargetTypeArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_custom_target_type");
  }
}