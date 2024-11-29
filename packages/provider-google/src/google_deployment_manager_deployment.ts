import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDeploymentManagerDeploymentArgslabels {
  key?: string;
  value?: string;
}
export interface GoogleDeploymentManagerDeploymentArgstargetconfig {
  content: string;
}
export interface GoogleDeploymentManagerDeploymentArgstargetimports {
  content?: string;
  name?: string;
}
export interface GoogleDeploymentManagerDeploymentArgstarget {
  config: GoogleDeploymentManagerDeploymentArgstargetconfig;
  imports: GoogleDeploymentManagerDeploymentArgstargetimports;
}
export interface GoogleDeploymentManagerDeploymentArgstimeouts {
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
  labels: GoogleDeploymentManagerDeploymentArgslabels;
  target: GoogleDeploymentManagerDeploymentArgstarget;
  timeouts: GoogleDeploymentManagerDeploymentArgstimeouts;
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