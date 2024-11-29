import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleApigeeSharedflowDeploymentArgstimeouts {
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
  timeouts: GoogleApigeeSharedflowDeploymentArgstimeouts;
}
export class google_apigee_sharedflow_deployment extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleApigeeSharedflowDeploymentArgs) {
    super(config, "resource", args, resourceName, "google_apigee_sharedflow_deployment");
  }
}