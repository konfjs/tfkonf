import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleDeploymentManagerDeploymentArgsLabels {
  key?: string;
  value?: string;
}
export interface GoogleDeploymentManagerDeploymentArgsTargetConfig {
  content: string;
}
export interface GoogleDeploymentManagerDeploymentArgsTargetImports {
  content?: string;
  name?: string;
}
export interface GoogleDeploymentManagerDeploymentArgsTarget {
  config: GoogleDeploymentManagerDeploymentArgsTargetConfig;
  imports: GoogleDeploymentManagerDeploymentArgsTargetImports;
}
export interface GoogleDeploymentManagerDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDeploymentManagerDeploymentArgs {
  create_policy?: string;
  delete_policy?: string;
  description?: string;
  name: string;
  preview?: boolean;
  labels: GoogleDeploymentManagerDeploymentArgsLabels;
  target: GoogleDeploymentManagerDeploymentArgsTarget;
  timeouts: GoogleDeploymentManagerDeploymentArgsTimeouts;
}
export class google_deployment_manager_deployment extends TerraformResource {
  readonly deployment_id!: string;
  readonly id?: string;
  readonly manifest!: string;
  readonly project?: string;
  readonly self_link!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDeploymentManagerDeploymentArgs) {
    super(config, "resource", args, resourceName, "google_deployment_manager_deployment");
  }
}