import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDynamodbTableItemArgs {
  hash_key: string;
  item: string;
  range_key?: string;
  table_name: string;
}
export class aws_dynamodb_table_item extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbTableItemArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_table_item");
  }
}