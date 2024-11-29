import { TerraformConfig, TerraformResource } from "tfs";
export interface NotificationConfig {
  pubsub_topic: string;
  send_for_bulk_import?: boolean;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleHealthcareDicomStoreArgs {
  dataset: string;
  labels?: {
    [key: string]: string;
  };
  name: string;
  notification_config: NotificationConfig;
  timeouts: Timeouts;
}
export class google_healthcare_dicom_store extends TerraformResource {
  readonly effective_labels!: {
    [key: string]: string;
  };
  readonly id?: string;
  readonly self_link!: string;
  readonly terraform_labels!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: GoogleHealthcareDicomStoreArgs) {
    super(config, "resource", args, resourceName, "google_healthcare_dicom_store");
  }
}