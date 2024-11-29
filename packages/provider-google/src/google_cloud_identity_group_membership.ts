import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudIdentityGroupMembershipArgsPreferredMemberKey {
  id: string;
  namespace?: string;
}
export interface GoogleCloudIdentityGroupMembershipArgsRolesExpiryDetail {
  expire_time: string;
}
export interface GoogleCloudIdentityGroupMembershipArgsRoles {
  name: string;
  expiry_detail: GoogleCloudIdentityGroupMembershipArgsRolesExpiryDetail;
}
export interface GoogleCloudIdentityGroupMembershipArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudIdentityGroupMembershipArgs {
  group: string;
  preferred_member_key: GoogleCloudIdentityGroupMembershipArgsPreferredMemberKey;
  roles: GoogleCloudIdentityGroupMembershipArgsRoles;
  timeouts: GoogleCloudIdentityGroupMembershipArgsTimeouts;
}
export class google_cloud_identity_group_membership extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly type!: string;
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleCloudIdentityGroupMembershipArgs) {
    super(config, "resource", args, resourceName, "google_cloud_identity_group_membership");
  }
}