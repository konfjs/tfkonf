import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface GoogleMlEngineModelArgsDefaultVersion {
  name: string;
}
export interface GoogleMlEngineModelArgsTimeouts {
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
  default_version: GoogleMlEngineModelArgsDefaultVersion;
  timeouts?: GoogleMlEngineModelArgsTimeouts;
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