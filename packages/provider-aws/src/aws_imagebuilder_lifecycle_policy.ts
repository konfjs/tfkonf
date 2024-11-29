import { TerraformConfig, TerraformResource } from "tfs";
export interface IncludeResources {}
export interface Action {
  type: string;
  include_resources: IncludeResources;
}
export interface LastLaunched {
  unit: string;
  value: number;
}
export interface Amis {
  is_public?: boolean;
  regions?: string[];
  shared_accounts?: string[];
  tag_map?: {
    [key: string]: string;
  };
  last_launched: LastLaunched;
}
export interface ExclusionRules {
  tag_map?: {
    [key: string]: string;
  };
  amis: Amis;
}
export interface Filter {
  retain_at_least?: number;
  type: string;
  unit?: string;
  value: number;
}
export interface PolicyDetail {
  action: Action;
  exclusion_rules: ExclusionRules;
  filter: Filter;
}
export interface Recipe {
  name: string;
  semantic_version: string;
}
export interface ResourceSelection {
  tag_map?: {
    [key: string]: string;
  };
  recipe: Recipe;
}
export interface AwsImagebuilderLifecyclePolicyArgs {
  description?: string;
  execution_role: string;
  name: string;
  resource_type: string;
  tags?: {
    [key: string]: string;
  };
  policy_detail: PolicyDetail;
  resource_selection: ResourceSelection;
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