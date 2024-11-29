import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowCxWebhookArgsGenericWebService {
  allowed_ca_certs?: string[];
  request_headers?: {
    [key: string]: string;
  };
  uri: string;
}
export interface GoogleDialogflowCxWebhookArgsServiceDirectoryGenericWebService {
  allowed_ca_certs?: string[];
  request_headers?: {
    [key: string]: string;
  };
  uri: string;
}
export interface GoogleDialogflowCxWebhookArgsServiceDirectory {
  service: string;
  generic_web_service: GoogleDialogflowCxWebhookArgsServiceDirectoryGenericWebService;
}
export interface GoogleDialogflowCxWebhookArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxWebhookArgs {
  disabled?: boolean;
  display_name: string;
  enable_spell_correction?: boolean;
  enable_stackdriver_logging?: boolean;
  parent?: string;
  security_settings?: string;
  timeout?: string;
  generic_web_service: GoogleDialogflowCxWebhookArgsGenericWebService;
  service_directory: GoogleDialogflowCxWebhookArgsServiceDirectory;
  timeouts: GoogleDialogflowCxWebhookArgstimeouts;
}
export class google_dialogflow_cx_webhook extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly start_flow!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxWebhookArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_webhook");
  }
}