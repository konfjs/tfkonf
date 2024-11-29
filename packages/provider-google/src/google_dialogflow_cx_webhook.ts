import { TerraformConfig, TerraformResource } from "tfs";
export interface GenericWebService {
  allowed_ca_certs?: string[];
  request_headers?: {
    [key: string]: string;
  };
  uri: string;
}
export interface GenericWebService {
  allowed_ca_certs?: string[];
  request_headers?: {
    [key: string]: string;
  };
  uri: string;
}
export interface ServiceDirectory {
  service: string;
  generic_web_service: GenericWebService;
}
export interface Timeouts {
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
  generic_web_service: GenericWebService;
  service_directory: ServiceDirectory;
  timeouts: Timeouts;
}
export class google_dialogflow_cx_webhook extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly start_flow!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxWebhookArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_webhook");
  }
}