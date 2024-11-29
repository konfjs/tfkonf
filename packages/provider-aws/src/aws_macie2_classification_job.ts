import { TerraformConfig, TerraformResource } from "tfs";
export interface SimpleCriterion {}
export interface TagValues {}
export interface TagCriterion {
  tag_values: TagValues;
}
export interface And {
  simple_criterion: SimpleCriterion;
  tag_criterion: TagCriterion;
}
export interface Excludes {
  and: And;
}
export interface SimpleCriterion {}
export interface TagValues {}
export interface TagCriterion {
  tag_values: TagValues;
}
export interface And {
  simple_criterion: SimpleCriterion;
  tag_criterion: TagCriterion;
}
export interface Includes {
  and: And;
}
export interface BucketCriteria {
  excludes: Excludes;
  includes: Includes;
}
export interface BucketDefinitions {
  account_id: string;
  buckets: string[];
}
export interface SimpleScopeTerm {}
export interface TagValues {}
export interface TagScopeTerm {
  tag_values: TagValues;
}
export interface And {
  simple_scope_term: SimpleScopeTerm;
  tag_scope_term: TagScopeTerm;
}
export interface Excludes {
  and: And;
}
export interface SimpleScopeTerm {}
export interface TagValues {}
export interface TagScopeTerm {
  tag_values: TagValues;
}
export interface And {
  simple_scope_term: SimpleScopeTerm;
  tag_scope_term: TagScopeTerm;
}
export interface Includes {
  and: And;
}
export interface Scoping {
  excludes: Excludes;
  includes: Includes;
}
export interface S3JobDefinition {
  bucket_criteria: BucketCriteria;
  bucket_definitions: BucketDefinitions;
  scoping: Scoping;
}
export interface ScheduleFrequency {
  daily_schedule?: boolean;
}
export interface AwsMacie2ClassificationJobArgs {
  initial_run?: boolean;
  job_type: string;
  tags?: {
    [key: string]: string;
  };
  s3_job_definition: S3JobDefinition;
  schedule_frequency: ScheduleFrequency;
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