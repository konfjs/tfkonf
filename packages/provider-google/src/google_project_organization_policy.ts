import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleProjectOrganizationPolicyArgsBooleanPolicy {
  enforced: boolean;
}
export interface GoogleProjectOrganizationPolicyArgsListPolicyAllow {
  all?: boolean;
  values?: string[];
}
export interface GoogleProjectOrganizationPolicyArgsListPolicyDeny {
  all?: boolean;
  values?: string[];
}
export interface GoogleProjectOrganizationPolicyArgsListPolicy {
  inherit_from_parent?: boolean;
  allow: GoogleProjectOrganizationPolicyArgsListPolicyAllow;
  deny: GoogleProjectOrganizationPolicyArgsListPolicyDeny;
}
export interface GoogleProjectOrganizationPolicyArgsRestorePolicy {
  default: boolean;
}
export interface GoogleProjectOrganizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleProjectOrganizationPolicyArgs {
  constraint: string;
  project: string;
  boolean_policy: GoogleProjectOrganizationPolicyArgsBooleanPolicy;
  list_policy: GoogleProjectOrganizationPolicyArgsListPolicy;
  restore_policy: GoogleProjectOrganizationPolicyArgsRestorePolicy;
  timeouts?: GoogleProjectOrganizationPolicyArgsTimeouts;
}
export class google_project_organization_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly update_time!: string;
  readonly version?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleProjectOrganizationPolicyArgs) {
    super(config, "resource", args, resourceName, "google_project_organization_policy");
  }
}