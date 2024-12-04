import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRedshiftLoggingArgs {
  bucket_name?: string;
  cluster_identifier: string;
  log_destination_type?: string;
  log_exports?: string[];
  s3_key_prefix?: string;
}

export class aws_redshift_logging extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftLoggingArgs) {
    super(config, "resource", args, resourceName, "aws_redshift_logging");
  }
}
