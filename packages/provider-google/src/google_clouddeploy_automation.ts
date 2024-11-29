import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleClouddeployAutomationArgsrulesAdvanceRolloutRule {
  id: string;
  source_phases?: string[];
  wait?: string;
}
export interface GoogleClouddeployAutomationArgsrulesPromoteReleaseRule {
  destination_phase?: string;
  destination_target_id?: string;
  id: string;
  wait?: string;
}
export interface GoogleClouddeployAutomationArgsrules {
  advance_rollout_rule: GoogleClouddeployAutomationArgsrulesAdvanceRolloutRule;
  promote_release_rule: GoogleClouddeployAutomationArgsrulesPromoteReleaseRule;
}
export interface GoogleClouddeployAutomationArgsselectortargets {
  id?: string;
}
export interface GoogleClouddeployAutomationArgsselector {
  targets: GoogleClouddeployAutomationArgsselectortargets;
}
export interface GoogleClouddeployAutomationArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleClouddeployAutomationArgs {
  annotations?: {
    [key: string]: string;
  };
  delivery_pipeline: string;
  description?: string;
  labels?: {
    [key: string]: string;
  };
  location: string;
  name: string;
  service_account: string;
  suspended?: boolean;
  rules: GoogleClouddeployAutomationArgsrules;
  selector: GoogleClouddeployAutomationArgsselector;
  timeouts: GoogleClouddeployAutomationArgstimeouts;
}
export class google_clouddeploy_automation extends TerraformResource {
  readonly create_time!: string;
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
  constructor(config: TerraformConfig, resourceName: string, args: GoogleClouddeployAutomationArgs) {
    super(config, "resource", args, resourceName, "google_clouddeploy_automation");
  }
}