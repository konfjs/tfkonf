import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailactionIncludeResources {}
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailaction {
  type: string;
  include_resources: AwsImagebuilderLifecyclePolicyArgsPolicyDetailactionIncludeResources;
}
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesamisLastLaunched {
  unit: string;
  value: number;
}
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesamis {
  is_public?: boolean;
  regions?: string[];
  shared_accounts?: string[];
  tag_map?: {
    [key: string]: string;
  };
  last_launched: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesamisLastLaunched;
}
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRules {
  tag_map?: {
    [key: string]: string;
  };
  amis: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesamis;
}
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailfilter {
  retain_at_least?: number;
  type: string;
  unit?: string;
  value: number;
}
export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetail {
  action: AwsImagebuilderLifecyclePolicyArgsPolicyDetailaction;
  exclusion_rules: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRules;
  filter: AwsImagebuilderLifecyclePolicyArgsPolicyDetailfilter;
}
export interface AwsImagebuilderLifecyclePolicyArgsResourceSelectionrecipe {
  name: string;
  semantic_version: string;
}
export interface AwsImagebuilderLifecyclePolicyArgsResourceSelection {
  tag_map?: {
    [key: string]: string;
  };
  recipe: AwsImagebuilderLifecyclePolicyArgsResourceSelectionrecipe;
}
export interface AwsImagebuilderLifecyclePolicyArgs {
  description?: string;
  execution_role: string;
  name: string;
  resource_type: string;
  tags?: {
    [key: string]: string;
  };
  policy_detail: AwsImagebuilderLifecyclePolicyArgsPolicyDetail;
  resource_selection: AwsImagebuilderLifecyclePolicyArgsResourceSelection;
}
export class aws_imagebuilder_lifecycle_policy extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly status?: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderLifecyclePolicyArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_lifecycle_policy");
  }
}