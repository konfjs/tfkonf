import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsExternalKeyArgs {
  bypass_policy_lockout_safety_check?: boolean;
  deletion_window_in_days?: number;
  description?: string;
  key_material_base64?: string;
  tags?: { [key: string]: string };
  valid_to?: string;
}

export class aws_kms_external_key extends TerraformResource {
  readonly arn!: string;
  readonly enabled?: boolean;
  readonly expiration_model!: string;
  readonly id?: string;
  readonly key_state!: string;
  readonly key_usage!: string;
  readonly multi_region?: boolean;
  readonly policy?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsKmsExternalKeyArgs) {
    super(config, "resource", args, resourceName, "aws_kms_external_key");
  }
}
