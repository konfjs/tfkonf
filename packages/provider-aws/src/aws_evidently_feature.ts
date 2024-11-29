import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsEvidentlyFeatureArgstimeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsEvidentlyFeatureArgsvariationsvalue {
  bool_value?: string;
  double_value?: string;
  long_value?: string;
  string_value?: string;
}
export interface AwsEvidentlyFeatureArgsvariations {
  name: string;
  value: AwsEvidentlyFeatureArgsvariationsvalue;
}
export interface AwsEvidentlyFeatureArgs {
  description?: string;
  entity_overrides?: {
    [key: string]: string;
  };
  name: string;
  project: string;
  tags?: {
    [key: string]: string;
  };
  timeouts: AwsEvidentlyFeatureArgstimeouts;
  variations: AwsEvidentlyFeatureArgsvariations;
}
export class aws_evidently_feature extends TerraformResource {
  readonly arn!: string;
  readonly created_time!: string;
  readonly default_variation?: string;
  readonly evaluation_rules!: any[];
  readonly evaluation_strategy?: string;
  readonly id?: string;
  readonly last_updated_time!: string;
  readonly status!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly value_type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsEvidentlyFeatureArgs) {
    super(config, "resource", args, resourceName, "aws_evidently_feature");
  }
}