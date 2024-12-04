import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDynamodbResourcePolicyArgs {
  policy: string;
  resource_arn: string;
}

export class aws_dynamodb_resource_policy extends TerraformResource {
  readonly confirm_remove_self_resource_access?: boolean;
  readonly id!: string;
  readonly revision_id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbResourcePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_resource_policy");
  }
}
