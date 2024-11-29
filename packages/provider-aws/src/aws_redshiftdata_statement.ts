import { TerraformConfig, TerraformResource } from "tfs";
export interface Parameters {
  name: string;
  value: string;
}
export interface Timeouts {
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
  parameters: Parameters;
  timeouts: Timeouts;
}
export class aws_redshiftdata_statement extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsRedshiftdataStatementArgs) {
    super(config, "resource", args, resourceName, "aws_redshiftdata_statement");
  }
}