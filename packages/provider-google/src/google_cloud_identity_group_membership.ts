import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleCloudIdentityGroupMembershipArgsPreferredMemberKey {
  id: string;
  namespace?: string;
}
export interface GoogleCloudIdentityGroupMembershipArgsrolesExpiryDetail {
  expire_time: string;
}
export interface GoogleCloudIdentityGroupMembershipArgsroles {
  name: string;
  expiry_detail: GoogleCloudIdentityGroupMembershipArgsrolesExpiryDetail;
}
export interface GoogleCloudIdentityGroupMembershipArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudIdentityGroupMembershipArgs {
  group: string;
  preferred_member_key: GoogleCloudIdentityGroupMembershipArgsPreferredMemberKey;
  roles: GoogleCloudIdentityGroupMembershipArgsroles;
  timeouts: GoogleCloudIdentityGroupMembershipArgstimeouts;
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