import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBigqueryDataTransferConfigArgsEmailPreferences {
  enable_failure_email: boolean;
}

export interface GoogleBigqueryDataTransferConfigArgsEncryptionConfiguration {
  kms_key_name: string;
}

export interface GoogleBigqueryDataTransferConfigArgsScheduleOptions {
  disable_auto_scheduling?: boolean;
  end_time?: string;
  start_time?: string;
}

export interface GoogleBigqueryDataTransferConfigArgsSensitiveParams {
  secret_access_key: string;
}

export interface GoogleBigqueryDataTransferConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBigqueryDataTransferConfigArgs {
  data_refresh_window_days?: number;
  data_source_id: string;
  destination_dataset_id?: string;
  disabled?: boolean;
  display_name: string;
  location?: string;
  notification_pubsub_topic?: string;
  params: { [key: string]: string };
  schedule?: string;
  service_account_name?: string;
  email_preferences: GoogleBigqueryDataTransferConfigArgsEmailPreferences;
  encryption_configuration: GoogleBigqueryDataTransferConfigArgsEncryptionConfiguration;
  schedule_options: GoogleBigqueryDataTransferConfigArgsScheduleOptions;
  sensitive_params: GoogleBigqueryDataTransferConfigArgsSensitiveParams;
  timeouts?: GoogleBigqueryDataTransferConfigArgsTimeouts;
}

export class google_bigquery_data_transfer_config extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly project?: string;

  constructor(config: TerraformConfig, resourceName: string, args: GoogleBigqueryDataTransferConfigArgs) {
    super(config, "resource", args, resourceName, "google_bigquery_data_transfer_config");
  }
}
