import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowAgentArgs {
  avatar_uri?: string;
  classification_threshold?: number;
  default_language_code: string;
  description?: string;
  display_name: string;
  enable_logging?: boolean;
  supported_language_codes?: string[];
  tier?: string;
  time_zone: string;
  timeouts: Timeouts;
}
export class google_dialogflow_agent extends TerraformResource {
  readonly api_version?: string;
  readonly avatar_uri_backend!: string;
  readonly id?: string;
  readonly match_mode?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowAgentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_agent");
  }
}