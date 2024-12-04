import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexTaskIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataplexTaskIamBindingArgs {
  lake: string;
  members: string[];
  role: string;
  task_id: string;
  condition: GoogleDataplexTaskIamBindingArgsCondition;
}

export class google_dataplex_task_iam_binding extends TerraformResource {
  readonly etag!: string;
  readonly id?: string;
  readonly location?: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataplexTaskIamBindingArgs) {
    super(config, "resource", args, resourceName, "google_dataplex_task_iam_binding");
  }
}
