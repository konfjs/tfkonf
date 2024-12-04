import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSsmPatchBaselineArgsApprovalRulePatchFilter {
  key: string;
  values: string[];
}

export interface AwsSsmPatchBaselineArgsApprovalRule {
  approve_after_days?: number;
  approve_until_date?: string;
  compliance_level?: string;
  enable_non_security?: boolean;
  patch_filter: AwsSsmPatchBaselineArgsApprovalRulePatchFilter;
}

export interface AwsSsmPatchBaselineArgsGlobalFilter {
  key: string;
  values: string[];
}

export interface AwsSsmPatchBaselineArgsSource {
  configuration: string;
  name: string;
  products: string[];
}

export interface AwsSsmPatchBaselineArgs {
  approved_patches?: string[];
  approved_patches_compliance_level?: string;
  approved_patches_enable_non_security?: boolean;
  description?: string;
  name: string;
  operating_system?: string;
  rejected_patches?: string[];
  tags?: { [key: string]: string };
  approval_rule: AwsSsmPatchBaselineArgsApprovalRule;
  global_filter: AwsSsmPatchBaselineArgsGlobalFilter;
  source: AwsSsmPatchBaselineArgsSource;
}

export class aws_ssm_patch_baseline extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly json!: string;
  readonly rejected_patches_action?: string;
  readonly tags_all?: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmPatchBaselineArgs) {
    super(config, "resource", args, resourceName, "aws_ssm_patch_baseline");
  }
}
