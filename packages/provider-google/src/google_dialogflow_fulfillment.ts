import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowFulfillmentArgsfeatures {
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
export interface GoogleDialogflowFulfillmentArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowFulfillmentArgs {
  display_name: string;
  enabled?: boolean;
  features: GoogleDialogflowFulfillmentArgsfeatures;
  generic_web_service: GoogleDialogflowFulfillmentArgsGenericWebService;
  timeouts: GoogleDialogflowFulfillmentArgstimeouts;
}
export class google_dialogflow_fulfillment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowFulfillmentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_fulfillment");
  }
}