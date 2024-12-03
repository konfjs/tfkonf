import { TerraformConfig, TerraformResource } from "@tfkonf/core";
export interface AwsSsmPatchGroupArgs {
  baseline_id: string;
  patch_group: string;
}
export class aws_ssm_patch_group extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmPatchGroupArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_patch_group");
  }
}