import { TerraformConfig, TerraformResource } from "tfs";
export interface KeyModesOfUse {}
export interface KeyAttributes {
  key_algorithm: string;
  key_class: string;
  key_usage: string;
  key_modes_of_use: KeyModesOfUse;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsPaymentcryptographyKeyArgs {
  exportable: boolean;
  tags?: {
    [key: string]: string;
  };
  key_attributes: KeyAttributes;
  timeouts: Timeouts;
}
export class aws_paymentcryptography_key extends TerraformResource {
  readonly arn!: string;
  readonly deletion_window_in_days?: number;
  readonly enabled?: boolean;
  readonly id!: string;
  readonly key_check_value!: string;
  readonly key_check_value_algorithm?: string;
  readonly key_origin!: string;
  readonly key_state!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPaymentcryptographyKeyArgs) {
    super(config, "resource", args, resourceName, "aws_paymentcryptography_key");
  }
}