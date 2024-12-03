import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsRedshiftdataStatementArgsParameters {
  name: string;
  value: string;
}
export interface AwsRedshiftdataStatementArgsTimeouts {
  create?: string;
}
export interface AwsRedshiftdataStatementArgs {
  cluster_identifier?: string;
  database: string;
  db_user?: string;
  secret_arn?: string;
  sql: string;
  statement_name?: string;
  with_event?: boolean;
  workgroup_name?: string;
  parameters: AwsRedshiftdataStatementArgsParameters;
  timeouts?: AwsRedshiftdataStatementArgsTimeouts;
}
export class aws_redshiftdata_statement extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftdataStatementArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftdata_statement");
  }
}