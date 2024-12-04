import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsStoragegatewayTapePoolArgs {
  pool_name: string;
  retention_lock_time_in_days?: number;
  retention_lock_type?: string;
  storage_class: string;
  tags?: { [key: string]: string };
}

export class aws_storagegateway_tape_pool extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsStoragegatewayTapePoolArgs) {
    super(config, "resource", args, resourceName, "aws_storagegateway_tape_pool");
  }
}
