import { TerraformConfig, TerraformResource } from "tfs";
export interface Replica {
  region_name: string;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDynamodbGlobalTableArgs {
  name: string;
  replica: Replica;
  timeouts: Timeouts;
}
export class aws_dynamodb_global_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbGlobalTableArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_global_table");
  }
}