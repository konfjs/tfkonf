import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesandSimpleCriterion {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesandTagCriterionTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesandTagCriterion {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesandTagCriterionTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesand {
  simple_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesandSimpleCriterion;
  tag_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesandTagCriterion;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludesand;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesandSimpleCriterion {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesandTagCriterionTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesandTagCriterion {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesandTagCriterionTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesand {
  simple_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesandSimpleCriterion;
  tag_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesandTagCriterion;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludesand;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteria {
  excludes: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaexcludes;
  includes: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaincludes;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketDefinitions {
  account_id: string;
  buckets: string[];
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesandSimpleScopeTerm {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesandTagScopeTermTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesandTagScopeTerm {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesandTagScopeTermTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesand {
  simple_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesandSimpleScopeTerm;
  tag_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesandTagScopeTerm;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludesand;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesandSimpleScopeTerm {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesandTagScopeTermTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesandTagScopeTerm {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesandTagScopeTermTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesand {
  simple_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesandSimpleScopeTerm;
  tag_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesandTagScopeTerm;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludesand;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionscoping {
  excludes: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingexcludes;
  includes: AwsMacie2ClassificationJobArgsS3JobDefinitionscopingincludes;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinition {
  bucket_criteria: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteria;
  bucket_definitions: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketDefinitions;
  scoping: AwsMacie2ClassificationJobArgsS3JobDefinitionscoping;
}
export interface AwsMacie2ClassificationJobArgsScheduleFrequency {
  daily_schedule?: boolean;
}
export interface AwsMacie2ClassificationJobArgs {
  initial_run?: boolean;
  job_type: string;
  tags?: {
    [key: string]: string;
  };
  s3_job_definition: AwsMacie2ClassificationJobArgsS3JobDefinition;
  schedule_frequency: AwsMacie2ClassificationJobArgsScheduleFrequency;
}
export class aws_macie2_classification_job extends TerraformResource {
  readonly created_at!: string;
  readonly custom_data_identifier_ids?: string[];
  readonly description?: string;
  readonly id?: string;
  readonly job_arn!: string;
  readonly job_id!: string;
  readonly job_status?: string;
  readonly name?: string;
  readonly name_prefix?: string;
  readonly sampling_percentage?: number;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly user_paused_details!: any[];
  constructor(config: TerraformConfig, resourceName: string, args: AwsMacie2ClassificationJobArgs) {
    super(config, "resource", args, resourceName, "aws_macie2_classification_job");
  }
}