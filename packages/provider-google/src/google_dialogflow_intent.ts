import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface GoogleDialogflowIntentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowIntentArgs {
  default_response_platforms?: string[];
  display_name: string;
  events?: string[];
  input_context_names?: string[];
  timeouts?: GoogleDialogflowIntentArgsTimeouts;
}
export class google_dialogflow_intent extends TerraformResource {
  readonly action?: string;
  readonly followup_intent_info!: any[];
  readonly id?: string;
  readonly is_fallback?: boolean;
  readonly ml_disabled?: boolean;
  readonly name!: string;
  readonly parent_followup_intent_name?: string;
  readonly priority?: number;
  readonly project?: string;
  readonly reset_contexts?: boolean;
  readonly root_followup_intent_name!: string;
  readonly webhook_state?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowIntentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_intent");
  }
}