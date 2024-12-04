import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceIamPolicyArgs {
  policy_data: string;
  service_name: string;
}

export class google_endpoints_service_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_endpoints_service_iam_policy");
  }
}
