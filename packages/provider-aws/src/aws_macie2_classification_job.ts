import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterion {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAnd {
  simple_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndSimpleCriterion;
  tag_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAndTagCriterion;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludesAnd;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterion {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterionTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAnd {
  simple_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
  tag_criterion: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludesAnd;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteria {
  excludes: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaExcludes;
  includes: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteriaIncludes;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionBucketDefinitions {
  account_id: string;
  buckets: string[];
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndSimpleScopeTerm {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTerm {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTermTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAnd {
  simple_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
  tag_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAndTagScopeTerm;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludesAnd;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndSimpleScopeTerm {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTerm {
  tag_values: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTermTagValues;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAnd {
  simple_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
  tag_scope_term: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAndTagScopeTerm;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludes {
  and: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludesAnd;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinitionScoping {
  excludes: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingExcludes;
  includes: AwsMacie2ClassificationJobArgsS3JobDefinitionScopingIncludes;
}
export interface AwsMacie2ClassificationJobArgsS3JobDefinition {
  bucket_criteria: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketCriteria;
  bucket_definitions: AwsMacie2ClassificationJobArgsS3JobDefinitionBucketDefinitions;
  scoping: AwsMacie2ClassificationJobArgsS3JobDefinitionScoping;
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