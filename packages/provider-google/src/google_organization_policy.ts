import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleOrganizationPolicyArgsBooleanPolicy {
  enforced: boolean;
}
export interface GoogleOrganizationPolicyArgsListPolicyallow {
  all?: boolean;
  values?: string[];
}
export interface GoogleOrganizationPolicyArgsListPolicydeny {
  all?: boolean;
  values?: string[];
}
export interface GoogleOrganizationPolicyArgsListPolicy {
  inherit_from_parent?: boolean;
  allow: GoogleOrganizationPolicyArgsListPolicyallow;
  deny: GoogleOrganizationPolicyArgsListPolicydeny;
}
export interface GoogleOrganizationPolicyArgsRestorePolicy {
  default: boolean;
}
export interface GoogleOrganizationPolicyArgstimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleOrganizationPolicyArgs {
  constraint: string;
  org_id: string;
  boolean_policy: GoogleOrganizationPolicyArgsBooleanPolicy;
  list_policy: GoogleOrganizationPolicyArgsListPolicy;
  restore_policy: GoogleOrganizationPolicyArgsRestorePolicy;
  timeouts: GoogleOrganizationPolicyArgstimeouts;
}
export class google_organization_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly update_time!: string;
  readonly version?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleOrganizationPolicyArgs) {
    super(config, "resource", args, resourceName, "google_organization_policy");
  }
}