import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDynamodbTableExportArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsDynamodbTableExportArgs {
  export_format?: string;
  s3_bucket: string;
  s3_sse_kms_key_id?: string;
  table_arn: string;
  timeouts: AwsDynamodbTableExportArgsTimeouts;
}
export class aws_dynamodb_table_export extends TerraformResource {
  readonly arn!: string;
  readonly billed_size_in_bytes!: number;
  readonly end_time!: string;
  readonly export_status!: string;
  readonly export_time?: string;
  readonly id?: string;
  readonly item_count!: number;
  readonly manifest_files_s3_key!: string;
  readonly s3_bucket_owner?: string;
  readonly s3_prefix?: string;
  readonly s3_sse_algorithm?: string;
  readonly start_time!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbTableExportArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_table_export");
  }
}