import { TerraformConfig, TerraformResource } from "tfs";
export interface Features {
  type: string;
}
export interface GenericWebService {
  password?: string;
  request_headers?: {
    [key: string]: string;
  };
  uri: string;
  username?: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowFulfillmentArgs {
  display_name: string;
  enabled?: boolean;
  features: Features;
  generic_web_service: GenericWebService;
  timeouts: Timeouts;
}
export class google_dialogflow_fulfillment extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowFulfillmentArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_fulfillment");
  }
}