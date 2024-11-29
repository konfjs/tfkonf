import { TerraformConfig, TerraformResource } from "tfs";
export interface PreferredMemberKey {
  id: string;
  namespace?: string;
}
export interface ExpiryDetail {
  expire_time: string;
}
export interface Roles {
  name: string;
  expiry_detail: ExpiryDetail;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleCloudIdentityGroupMembershipArgs {
  group: string;
  preferred_member_key: PreferredMemberKey;
  roles: Roles;
  timeouts: Timeouts;
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