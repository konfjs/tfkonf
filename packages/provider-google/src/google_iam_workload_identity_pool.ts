import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIamWorkloadIdentityPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIamWorkloadIdentityPoolArgs {
  description?: string;
  disabled?: boolean;
  display_name?: string;
  workload_identity_pool_id: string;
  timeouts?: GoogleIamWorkloadIdentityPoolArgsTimeouts;
}

export class google_iam_workload_identity_pool extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  readonly state!: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleIamWorkloadIdentityPoolArgs) {
    super(config, "resource", args, resourceName, "google_iam_workload_identity_pool");
  }
}
