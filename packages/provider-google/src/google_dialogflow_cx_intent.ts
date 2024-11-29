import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowCxIntentArgsparameters {
  entity_type: string;
  id: string;
  is_list?: boolean;
  redact?: boolean;
}
export interface GoogleDialogflowCxIntentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxIntentArgsTrainingPhrasesparts {
  parameter_id?: string;
  text: string;
}
export interface GoogleDialogflowCxIntentArgsTrainingPhrases {
  repeat_count?: number;
  parts: GoogleDialogflowCxIntentArgsTrainingPhrasesparts;
}
export interface GoogleDialogflowCxIntentArgs {
  description?: string;
  display_name: string;
  is_default_negative_intent?: boolean;
  is_default_welcome_intent?: boolean;
  is_fallback?: boolean;
  labels?: {
    [key: string]: string;
  };
  language_code?: string;
  parent?: string;
  priority?: number;
  parameters: GoogleDialogflowCxIntentArgsparameters;
  timeouts: GoogleDialogflowCxIntentArgstimeouts;
  training_phrases: GoogleDialogflowCxIntentArgsTrainingPhrases;
}
export class google_dialogflow_cx_intent extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly name!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxIntentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_intent");
  }
}