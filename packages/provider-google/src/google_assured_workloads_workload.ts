import { TerraformConfig, TerraformResource } from "tfs";
export interface KmsSettings {
  next_rotation_time: string;
  rotation_period: string;
}
export interface PartnerPermissions {
  assured_workloads_monitoring?: boolean;
  data_logs_viewer?: boolean;
  service_access_approver?: boolean;
}
export interface ResourceSettings {
  display_name?: string;
  resource_id?: string;
  resource_type?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface WorkloadOptions {
  kaj_enrollment_type?: string;
}
export interface GoogleAssuredWorkloadsWorkloadArgs {
  billing_account?: string;
  compliance_regime: string;
  display_name: string;
  enable_sovereign_controls?: boolean;
  labels?: {
    [key: string]: string;
  };
  location: string;
  organization: string;
  partner?: string;
  partner_services_billing_account?: string;
  provisioned_resources_parent?: string;
  kms_settings: KmsSettings;
  partner_permissions: PartnerPermissions;
  resource_settings: ResourceSettings;
  timeouts: Timeouts;
  workload_options: WorkloadOptions;
}
export class google_assured_workloads_workload extends TerraformResource {
  readonly compliance_status!: any[];
  readonly compliant_but_disallowed_services!: string[];
  readonly create_time!: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly ekm_provisioning_response!: any[];
  readonly id?: string;
  readonly kaj_enrollment_state!: string;
  readonly name!: string;
  readonly resources!: any[];
  readonly saa_enrollment_response!: any[];
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly violation_notifications_enabled?: boolean;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleAssuredWorkloadsWorkloadArgs) {
    super(config, "resource", args, resourceName, "google_assured_workloads_workload");
  }
}