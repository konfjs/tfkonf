import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexTaskIamPolicyArgs {
  lake: string;
  policy_data: string;
  task_id: string;
}

export class google_dataplex_task_iam_policy extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexTaskIamPolicyArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_task_iam_policy");
  }
}
