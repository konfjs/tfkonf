import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleSecurityposturePostureDeploymentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleSecurityposturePostureDeploymentArgs {
  description?: string;
  location: string;
  parent: string;
  posture_deployment_id: string;
  posture_id: string;
  posture_revision_id: string;
  target_resource: string;
  timeouts: GoogleSecurityposturePostureDeploymentArgsTimeouts;
}
export class google_securityposture_posture_deployment extends TerraformResource {
  readonly create_time!: string;
  readonly desired_posture_id!: string;
  readonly desired_posture_revision_id!: string;
  readonly etag!: string;
  readonly failure_message!: string;
  readonly id?: string;
  readonly name!: string;
  readonly reconciling!: boolean;
  readonly state!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleSecurityposturePostureDeploymentArgs) {
    super(config, "resource", args, resourceName, "google_securityposture_posture_deployment");
  }
}