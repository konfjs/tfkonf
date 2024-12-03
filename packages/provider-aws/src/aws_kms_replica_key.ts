import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsKmsReplicaKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  deletion_window_in_days?: number;
  description?: string;
  enabled?: boolean;
  primary_key_arn: string;
  tags?: {
    [key: string]: string;
  };
}
export class aws_kms_replica_key extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly key_id!: string;
  readonly key_rotation_enabled!: boolean;
  readonly key_spec!: string;
  readonly key_usage!: string;
  readonly policy?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsReplicaKeyArgs) {
    super(config, "resource", args, resourceName, "aws_kms_replica_key");
  }
}