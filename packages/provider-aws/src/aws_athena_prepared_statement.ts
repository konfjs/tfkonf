import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsAthenaPreparedStatementArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsAthenaPreparedStatementArgs {
  description?: string;
  name: string;
  query_statement: string;
  workgroup: string;
  timeouts?: AwsAthenaPreparedStatementArgsTimeouts;
}
export class aws_athena_prepared_statement extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaPreparedStatementArgs) {
    super(config, "resource", args, resourceName, "aws_athena_prepared_statement");
  }
}