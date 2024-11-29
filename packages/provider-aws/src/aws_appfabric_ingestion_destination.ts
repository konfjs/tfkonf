import { TerraformConfig, TerraformResource } from "tfs";
export interface FirehoseStream {
  stream_name: string;
}
export interface S3Bucket {
  bucket_name: string;
  prefix?: string;
}
export interface Destination {
  firehose_stream: FirehoseStream;
  s3_bucket: S3Bucket;
}
export interface AuditLog {
  destination: Destination;
}
export interface DestinationConfiguration {
  audit_log: AuditLog;
}
export interface AuditLog {
  format: string;
  schema: string;
}
export interface ProcessingConfiguration {
  audit_log: AuditLog;
}
export interface Timeouts {
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
  destination_configuration: DestinationConfiguration;
  processing_configuration: ProcessingConfiguration;
  timeouts: Timeouts;
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