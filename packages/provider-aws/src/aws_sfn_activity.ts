import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSfnActivityArgsEncryptionConfiguration {
  kms_data_key_reuse_period_seconds?: number;
  kms_key_id?: string;
  type?: string;
}
export interface AwsSfnActivityArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  encryption_configuration: AwsSfnActivityArgsEncryptionConfiguration;
}
export class aws_sfn_activity extends TerraformResource {
  readonly creation_date!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSfnActivityArgs) {
    super(config, "resource", args, resourceName, "aws_sfn_activity");
  }
}