import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleEndpointsServiceIamMemberArgscondition {
  description?: string;
  expression: string;
  title: string;
}
export interface GoogleEndpointsServiceIamMemberArgs {
  member: string;
  role: string;
  service_name: string;
  condition: GoogleEndpointsServiceIamMemberArgscondition;
}
export class google_endpoints_service_iam_member extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceIamMemberArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_iam_member");
  }
}