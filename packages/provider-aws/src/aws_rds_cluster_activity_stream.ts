import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRdsClusterActivityStreamArgs {
  engine_native_audit_fields_included?: boolean;
  kms_key_id: string;
  mode: string;
  resource_arn: string;
}
export class aws_rds_cluster_activity_stream extends TerraformResource {
  readonly id?: string;
  readonly kinesis_stream_name!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRdsClusterActivityStreamArgs) {
    super(config, "resource", args, resourceName, "aws_rds_cluster_activity_stream");
  }
}