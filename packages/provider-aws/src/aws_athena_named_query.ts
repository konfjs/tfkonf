import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsAthenaNamedQueryArgs {
  database: string;
  description?: string;
  name: string;
  query: string;
  workgroup?: string;
}
export class aws_athena_named_query extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsAthenaNamedQueryArgs) {
    super(config, "resource", args, resourceName, "aws_athena_named_query");
  }
}