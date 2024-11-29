import { TerraformConfig, TerraformResource } from "tfs";
export interface GooglePrivilegedAccessManagerEntitlementArgsAdditionalNotificationTargets {
  admin_email_recipients?: string[];
  requester_email_recipients?: string[];
}
export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalsstepsapprovers {
  principals: string[];
}
export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalssteps {
  approvals_needed?: number;
  approver_email_recipients?: string[];
  approvers: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalsstepsapprovers;
}
export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovals {
  require_approver_justification?: boolean;
  steps: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalssteps;
}
export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflow {
  manual_approvals: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovals;
}
export interface GooglePrivilegedAccessManagerEntitlementArgsEligibleUsers {
  principals: string[];
}
export interface GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccessRoleBindings {
  condition_expression?: string;
  role: string;
}
export interface GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccess {
  resource: string;
  resource_type: string;
  role_bindings: GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccessRoleBindings;
}
export interface GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccess {
  gcp_iam_access: GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccess;
}
export interface GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigNotMandatory {}
export interface GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigunstructured {}
export interface GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfig {
  not_mandatory: GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigNotMandatory;
  unstructured: GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigunstructured;
}
export interface GooglePrivilegedAccessManagerEntitlementArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GooglePrivilegedAccessManagerEntitlementArgs {
  entitlement_id: string;
  location: string;
  max_request_duration: string;
  parent: string;
  additional_notification_targets: GooglePrivilegedAccessManagerEntitlementArgsAdditionalNotificationTargets;
  approval_workflow: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflow;
  eligible_users: GooglePrivilegedAccessManagerEntitlementArgsEligibleUsers;
  privileged_access: GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccess;
  requester_justification_config: GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfig;
  timeouts: GooglePrivilegedAccessManagerEntitlementArgstimeouts;
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