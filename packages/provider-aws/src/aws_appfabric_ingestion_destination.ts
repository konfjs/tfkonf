import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogdestinationFirehoseStream {
  stream_name: string;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogdestinationS3Bucket {
  bucket_name: string;
  prefix?: string;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogdestination {
  firehose_stream: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogdestinationFirehoseStream;
  s3_bucket: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogdestinationS3Bucket;
}
export interface AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLog {
  destination: AwsAppfabricIngestionDestinationArgsDestinationConfigurationAuditLogdestination;
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
export interface AwsAppfabricIngestionDestinationArgstimeouts {
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
  timeouts: AwsAppfabricIngestionDestinationArgstimeouts;
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