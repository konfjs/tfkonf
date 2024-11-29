import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDynamodbGlobalTableArgsreplica {
  region_name: string;
}
export interface AwsDynamodbGlobalTableArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDynamodbGlobalTableArgs {
  name: string;
  replica: AwsDynamodbGlobalTableArgsreplica;
  timeouts: AwsDynamodbGlobalTableArgstimeouts;
}
export class aws_dynamodb_global_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbGlobalTableArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_global_table");
  }
}