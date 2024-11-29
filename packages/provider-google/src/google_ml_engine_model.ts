import { TerraformConfig, TerraformResource } from "tfs";
export interface DefaultVersion {
  name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleMlEngineModelArgs {
  description?: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  online_prediction_console_logging?: boolean;
  online_prediction_logging?: boolean;
  regions?: string[];
  default_version: DefaultVersion;
  timeouts: Timeouts;
}
export class google_ml_engine_model extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly project?: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleMlEngineModelArgs) {
    super(config, "resource", args, resourceName, "google_ml_engine_model");
  }
}