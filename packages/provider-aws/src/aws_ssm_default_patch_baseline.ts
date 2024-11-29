import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsSsmDefaultPatchBaselineArgs {
  baseline_id: string;
  operating_system: string;
}
export class aws_ssm_default_patch_baseline extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmDefaultPatchBaselineArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_default_patch_baseline");
  }
}