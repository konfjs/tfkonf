import { TerraformConfig, TerraformResource } from "tfs";
export interface GoogleDialogflowCxVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDialogflowCxVersionArgs {
  description?: string;
  display_name: string;
  parent?: string;
  timeouts: GoogleDialogflowCxVersionArgsTimeouts;
}
export class google_dialogflow_cx_version extends TerraformResource {
  readonly create_time!: string;
  readonly id?: string;
  readonly name!: string;
  readonly nlu_settings!: any[];
  readonly state!: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDialogflowCxVersionArgs) {
    super(config, "resource", args, resourceName, "google_dialogflow_cx_version");
  }
}