import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleFolderOrganizationPolicyArgsBooleanPolicy {
  enforced: boolean;
}
export interface GoogleFolderOrganizationPolicyArgsListPolicyAllow {
  all?: boolean;
  values?: string[];
}
export interface GoogleFolderOrganizationPolicyArgsListPolicyDeny {
  all?: boolean;
  values?: string[];
}
export interface GoogleFolderOrganizationPolicyArgsListPolicy {
  inherit_from_parent?: boolean;
  allow: GoogleFolderOrganizationPolicyArgsListPolicyAllow;
  deny: GoogleFolderOrganizationPolicyArgsListPolicyDeny;
}
export interface GoogleFolderOrganizationPolicyArgsRestorePolicy {
  default: boolean;
}
export interface GoogleFolderOrganizationPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}
export interface GoogleFolderOrganizationPolicyArgs {
  constraint: string;
  folder: string;
  boolean_policy: GoogleFolderOrganizationPolicyArgsBooleanPolicy;
  list_policy: GoogleFolderOrganizationPolicyArgsListPolicy;
  restore_policy: GoogleFolderOrganizationPolicyArgsRestorePolicy;
  timeouts: GoogleFolderOrganizationPolicyArgsTimeouts;
}
export class google_folder_organization_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly update_time!: string;
  readonly version?: number;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleFolderOrganizationPolicyArgs) {
    super(config, "resource", args, resourceName, "google_folder_organization_policy");
  }
}