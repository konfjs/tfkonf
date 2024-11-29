import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDynamodbTableReplicaArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsDynamodbTableReplicaArgs {
  global_table_arn: string;
  point_in_time_recovery?: boolean;
  table_class_override?: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsDynamodbTableReplicaArgsTimeouts;
}
export class aws_dynamodb_table_replica extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_arn?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsDynamodbTableReplicaArgs) {
    super(config, "resource", args, resourceName, "aws_dynamodb_table_replica");
  }
}