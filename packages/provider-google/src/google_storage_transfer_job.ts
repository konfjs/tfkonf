import { TerraformConfig, TerraformResource } from "tfs";
export interface EventStream {
  event_stream_expiration_time?: string;
  event_stream_start_time?: string;
  name: string;
}
export interface NotificationConfig {
  event_types?: string[];
  payload_format: string;
  pubsub_topic: string;
}
export interface ScheduleEndDate {
  day: number;
  month: number;
  year: number;
}
export interface ScheduleStartDate {
  day: number;
  month: number;
  year: number;
}
export interface StartTimeOfDay {
  hours: number;
  minutes: number;
  nanos: number;
  seconds: number;
}
export interface Schedule {
  repeat_interval?: string;
  schedule_end_date: ScheduleEndDate;
  schedule_start_date: ScheduleStartDate;
  start_time_of_day: StartTimeOfDay;
}
export interface AwsAccessKey {
  access_key_id: string;
  secret_access_key: string;
}
export interface AwsS3DataSource {
  bucket_name: string;
  path?: string;
  role_arn?: string;
  aws_access_key: AwsAccessKey;
}
export interface AzureCredentials {
  sas_token: string;
}
export interface AzureBlobStorageDataSource {
  container: string;
  storage_account: string;
  azure_credentials: AzureCredentials;
}
export interface GcsDataSink {
  bucket_name: string;
}
export interface GcsDataSource {
  bucket_name: string;
}
export interface HttpDataSource {
  list_url: string;
}
export interface ObjectConditions {
  exclude_prefixes?: string[];
  include_prefixes?: string[];
  last_modified_before?: string;
  last_modified_since?: string;
  max_time_elapsed_since_last_modification?: string;
  min_time_elapsed_since_last_modification?: string;
}
export interface PosixDataSink {
  root_directory: string;
}
export interface PosixDataSource {
  root_directory: string;
}
export interface TransferOptions {
  delete_objects_from_source_after_transfer?: boolean;
  delete_objects_unique_in_sink?: boolean;
  overwrite_objects_already_existing_in_sink?: boolean;
  overwrite_when?: string;
}
export interface TransferSpec {
  aws_s3_data_source: AwsS3DataSource;
  azure_blob_storage_data_source: AzureBlobStorageDataSource;
  gcs_data_sink: GcsDataSink;
  gcs_data_source: GcsDataSource;
  http_data_source: HttpDataSource;
  object_conditions: ObjectConditions;
  posix_data_sink: PosixDataSink;
  posix_data_source: PosixDataSource;
  transfer_options: TransferOptions;
}
export interface GoogleStorageTransferJobArgs {
  description: string;
  status?: string;
  event_stream: EventStream;
  notification_config: NotificationConfig;
  schedule: Schedule;
  transfer_spec: TransferSpec;
}
export class google_storage_transfer_job extends TerraformResource {
  readonly creation_time!: string;
  readonly deletion_time!: string;
  readonly id?: string;
  readonly last_modification_time!: string;
  readonly name?: string;
  readonly project?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleStorageTransferJobArgs) {
    super(config, "resource", args, resourceName, "google_storage_transfer_job");
  }
}