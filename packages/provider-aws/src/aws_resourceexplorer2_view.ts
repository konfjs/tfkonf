import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsResourceexplorer2ViewArgsFilters {
  filter_string: string;
}
export interface AwsResourceexplorer2ViewArgsIncludedProperty {
  name: string;
}
export interface AwsResourceexplorer2ViewArgs {
  name: string;
  tags?: {
    [key: string]: string;
  };
  filters: AwsResourceexplorer2ViewArgsFilters;
  included_property: AwsResourceexplorer2ViewArgsIncludedProperty;
}
export class aws_resourceexplorer2_view extends TerraformResource {
  readonly arn!: string;
  readonly default_view?: boolean;
  readonly id!: string;
  readonly scope?: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsResourceexplorer2ViewArgs) {
    super(config, "resource", args, resourceName, "aws_resourceexplorer2_view");
  }
}