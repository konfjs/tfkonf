import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowFulfillmentArgsFeatures {
  type: string;
}
export interface GoogleDialogflowFulfillmentArgsGenericWebService {
  password?: string;
  request_headers?: {
    [key: string]: string;
  };
  uri: string;
  username?: string;
}
export interface GoogleDialogflowFulfillmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowFulfillmentArgs {
  display_name: string;
  enabled?: boolean;
  features: GoogleDialogflowFulfillmentArgsFeatures;
  generic_web_service: GoogleDialogflowFulfillmentArgsGenericWebService;
  timeouts: GoogleDialogflowFulfillmentArgsTimeouts;
}
export class google_dialogflow_fulfillment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowFulfillmentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_fulfillment");
  }
}