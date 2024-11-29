import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAthenaPreparedStatementArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAthenaPreparedStatementArgs {
  description?: string;
  name: string;
  query_statement: string;
  workgroup: string;
  timeouts: AwsAthenaPreparedStatementArgstimeouts;
}
export class aws_athena_prepared_statement extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaPreparedStatementArgs) {
    super(config, "resource", args, resourceName, "aws_athena_prepared_statement");
  }
}