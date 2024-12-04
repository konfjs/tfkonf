import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsTimestreamwriteDatabaseArgs {
  database_name: string;
  tags?: { [key: string]: string };
}

export class aws_timestreamwrite_database extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly kms_key_id?: string;
  readonly table_count!: number;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsTimestreamwriteDatabaseArgs) {
    super(config, "resource", args, resourceName, "aws_timestreamwrite_database");
  }
}
