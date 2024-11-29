import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleWorkflowsWorkflowArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleWorkflowsWorkflowArgs {
  call_log_level?: string;
  crypto_key_name?: string;
  deletion_protection?: boolean;
  labels?: {
    [key: string]: string;
  };
  region?: string;
  source_contents?: string;
  user_env_vars?: {
    [key: string]: string;
  };
  timeouts?: GoogleWorkflowsWorkflowArgsTimeouts;
}
export class google_workflows_workflow extends TerraformResource {
  readonly create_time!: string;
  readonly description?: string;
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly project?: string;
  readonly revision_id!: string;
  readonly service_account?: string;
  readonly state!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  readonly update_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleWorkflowsWorkflowArgs) {
    super(config, "resource", args, resourceName, "google_workflows_workflow");
  }
}