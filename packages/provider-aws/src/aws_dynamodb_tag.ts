import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsDynamodbTagArgs {
  key: string;
  resource_arn: string;
  value: string;
}
export class aws_dynamodb_tag extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbTagArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_tag");
  }
}