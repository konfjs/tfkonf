import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsCloudhsmV2HsmArgsTimeouts {
  create?: string;
  delete?: string;
}
export interface AwsCloudhsmV2HsmArgs {
  cluster_id: string;
  timeouts: AwsCloudhsmV2HsmArgsTimeouts;
}
export class aws_cloudhsm_v2_hsm extends TerraformResource {
  readonly availability_zone?: string;
  readonly hsm_eni_id!: string;
  readonly hsm_id!: string;
  readonly hsm_state!: string;
  readonly id?: string;
  readonly ip_address?: string;
  readonly subnet_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudhsmV2HsmArgs) {
    super(config, "resource", args, resourceName, "aws_cloudhsm_v2_hsm");
  }
}