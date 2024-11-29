import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsKmsKeyArgsTimeouts {
  create?: string;
}
export interface AwsKmsKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  custom_key_store_id?: string;
  customer_master_key_spec?: string;
  deletion_window_in_days?: number;
  enable_key_rotation?: boolean;
  is_enabled?: boolean;
  key_usage?: string;
  tags?: {
    [key: string]: string;
  };
  xks_key_id?: string;
  timeouts?: AwsKmsKeyArgsTimeouts;
}
export class aws_kms_key extends TerraformResource {
  readonly arn!: string;
  readonly description?: string;
  readonly id?: string;
  readonly key_id!: string;
  readonly multi_region?: boolean;
  readonly policy?: string;
  readonly rotation_period_in_days?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsKeyArgs) {
    super(config, "resource", args, resourceName, "aws_kms_key");
  }
}