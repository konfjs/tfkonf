import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleApigeeSharedflowDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleApigeeSharedflowDeploymentArgs {
  environment: string;
  org_id: string;
  revision: string;
  service_account?: string;
  sharedflow_id: string;
  timeouts?: GoogleApigeeSharedflowDeploymentArgsTimeouts;
}
export class google_apigee_sharedflow_deployment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeSharedflowDeploymentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_sharedflow_deployment");
  }
}