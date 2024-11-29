import { TerraformConfig, TerraformResource } from "tfs";
export interface Labels {
  key?: string;
  value?: string;
}
export interface Config {
  content: string;
}
export interface Imports {
  content?: string;
  name?: string;
}
export interface Target {
  config: Config;
  imports: Imports;
}
export interface Timeouts {
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
  labels: Labels;
  target: Target;
  timeouts: Timeouts;
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