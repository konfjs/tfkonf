import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailActionIncludeResources {
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailAction {
  type: string;
  include_resources: AwsImagebuilderLifecyclePolicyArgsPolicyDetailActionIncludeResources;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmisLastLaunched {
  unit: string;
  value: number;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmis {
  is_public?: boolean;
  regions?: string[];
  shared_accounts?: string[];
  tag_map?: { [key: string]: string };
  last_launched: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmisLastLaunched;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRules {
  tag_map?: { [key: string]: string };
  amis: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmis;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailFilter {
  retain_at_least?: number;
  type: string;
  unit?: string;
  value: number;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetail {
  action: AwsImagebuilderLifecyclePolicyArgsPolicyDetailAction;
  exclusion_rules: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRules;
  filter: AwsImagebuilderLifecyclePolicyArgsPolicyDetailFilter;
}

export interface AwsImagebuilderLifecyclePolicyArgsResourceSelectionRecipe {
  name: string;
  semantic_version: string;
}

export interface AwsImagebuilderLifecyclePolicyArgsResourceSelection {
  tag_map?: { [key: string]: string };
  recipe: AwsImagebuilderLifecyclePolicyArgsResourceSelectionRecipe;
}

export interface AwsImagebuilderLifecyclePolicyArgs {
  description?: string;
  execution_role: string;
  name: string;
  resource_type: string;
  tags?: { [key: string]: string };
  policy_detail: AwsImagebuilderLifecyclePolicyArgsPolicyDetail;
  resource_selection: AwsImagebuilderLifecyclePolicyArgsResourceSelection;
}

export class aws_imagebuilder_lifecycle_policy extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly status?: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderLifecyclePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_lifecycle_policy");
  }
}
