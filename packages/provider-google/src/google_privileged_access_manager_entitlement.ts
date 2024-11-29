import { TerraformConfig, TerraformResource } from "tfs";
export interface AdditionalNotificationTargets {
  admin_email_recipients?: string[];
  requester_email_recipients?: string[];
}
export interface Approvers {
  principals: string[];
}
export interface Steps {
  approvals_needed?: number;
  approver_email_recipients?: string[];
  approvers: Approvers;
}
export interface ManualApprovals {
  require_approver_justification?: boolean;
  steps: Steps;
}
export interface ApprovalWorkflow {
  manual_approvals: ManualApprovals;
}
export interface EligibleUsers {
  principals: string[];
}
export interface RoleBindings {
  condition_expression?: string;
  role: string;
}
export interface GcpIamAccess {
  resource: string;
  resource_type: string;
  role_bindings: RoleBindings;
}
export interface PrivilegedAccess {
  gcp_iam_access: GcpIamAccess;
}
export interface NotMandatory {}
export interface Unstructured {}
export interface RequesterJustificationConfig {
  not_mandatory: NotMandatory;
  unstructured: Unstructured;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePrivilegedAccessManagerEntitlementArgs {
  entitlement_id: string;
  location: string;
  max_request_duration: string;
  parent: string;
  additional_notification_targets: AdditionalNotificationTargets;
  approval_workflow: ApprovalWorkflow;
  eligible_users: EligibleUsers;
  privileged_access: PrivilegedAccess;
  requester_justification_config: RequesterJustificationConfig;
  timeouts: Timeouts;
}
export class google_privileged_access_manager_entitlement extends TerraformResource {
  readonly create_time!: string;
  readonly etag!: string;
  readonly id?: string;
  readonly name!: string;
  readonly state!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GooglePrivilegedAccessManagerEntitlementArgs) {
    super(config, "resource", args, resourceName, "google_privileged_access_manager_entitlement");
  }
}