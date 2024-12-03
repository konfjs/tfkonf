import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationFirehoseStream {
  stream_name: string;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationS3Bucket {
  bucket_name: string;
  prefix?: string;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestination {
  firehose_stream: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationFirehoseStream;
  s3_bucket: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestinationS3Bucket;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLog {
  destination: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogDestination;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfiguration {
  audit_log: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLog;
}
export interface AwsAppfabricIngestionDestinationArgsProcessingConfigurationAuditLog {
  format: string;
  schema: string;
}
export interface AwsAppfabricIngestionDestinationArgsProcessingConfiguration {
  audit_log: AwsAppfabricIngestionDestinationArgsProcessingConfigurationAuditLog;
}
export interface AwsAppfabricIngestionDestinationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAppfabricIngestionDestinationArgs {
  app_bundle_arn: string;
  ingestion_arn: string;
  tags?: {
    [key: string]: string;
  };
  destination_configuration: AwsAppfabricIngestionDestinationArgsDestinationConfiguration;
  processing_configuration: AwsAppfabricIngestionDestinationArgsProcessingConfiguration;
  timeouts?: AwsAppfabricIngestionDestinationArgsTimeouts;
}
export class aws_appfabric_ingestion_destination extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsAppfabricIngestionDestinationArgs) {
    super(config, "resource", args, resourceName, "aws_appfabric_ingestion_destination");
  }
}