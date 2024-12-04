import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbGlobalTableArgsReplica {
  region_name: string;
}

export interface AwsDynamodbGlobalTableArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDynamodbGlobalTableArgs {
  name: string;
  replica: AwsDynamodbGlobalTableArgsReplica;
  timeouts?: AwsDynamodbGlobalTableArgsTimeouts;
}

export class aws_dynamodb_global_table extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbGlobalTableArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_global_table");
  }
}
