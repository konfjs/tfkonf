import { TerraformConfig, TerraformResource } from "tfs";
export interface CloudStoragePath {
  path: string;
}
export interface WordList {
  words: string[];
}
export interface Dictionary {
  cloud_storage_path: CloudStoragePath;
  word_list: WordList;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoType {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface Regex {
  group_indexes?: number[];
  pattern: string;
}
export interface SensitivityScore {
  score: string;
}
export interface StoredType {
  name: string;
}
export interface SurrogateType {}
export interface CustomInfoTypes {
  exclusion_type?: string;
  likelihood?: string;
  dictionary: Dictionary;
  info_type: InfoType;
  regex: Regex;
  sensitivity_score: SensitivityScore;
  stored_type: StoredType;
  surrogate_type: SurrogateType;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoType {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface MaxFindingsPerInfoType {
  max_findings: number;
  info_type: InfoType;
}
export interface Limits {
  max_findings_per_item: number;
  max_findings_per_request: number;
  max_findings_per_info_type: MaxFindingsPerInfoType;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface CloudStoragePath {
  path: string;
}
export interface WordList {
  words: string[];
}
export interface Dictionary {
  cloud_storage_path: CloudStoragePath;
  word_list: WordList;
}
export interface HotwordRegex {
  group_indexes?: number[];
  pattern: string;
}
export interface Proximity {
  window_after?: number;
  window_before?: number;
}
export interface ExcludeByHotword {
  hotword_regex: HotwordRegex;
  proximity: Proximity;
}
export interface SensitivityScore {
  score: string;
}
export interface InfoTypes {
  name: string;
  version?: string;
  sensitivity_score: SensitivityScore;
}
export interface ExcludeInfoTypes {
  info_types: InfoTypes;
}
export interface Regex {
  group_indexes?: number[];
  pattern: string;
}
export interface ExclusionRule {
  matching_type: string;
  dictionary: Dictionary;
  exclude_by_hotword: ExcludeByHotword;
  exclude_info_types: ExcludeInfoTypes;
  regex: Regex;
}
export interface HotwordRegex {
  group_indexes?: number[];
  pattern: string;
}
export interface LikelihoodAdjustment {
  fixed_likelihood?: string;
  relative_likelihood?: number;
}
export interface Proximity {
  window_after?: number;
  window_before?: number;
}
export interface HotwordRule {
  hotword_regex: HotwordRegex;
  likelihood_adjustment: LikelihoodAdjustment;
  proximity: Proximity;
}
export interface Rules {
  exclusion_rule: ExclusionRule;
  hotword_rule: HotwordRule;
}
export interface RuleSet {
  info_types: InfoTypes;
  rules: Rules;
}
export interface InspectConfig {
  content_options?: string[];
  exclude_info_types?: boolean;
  include_quote?: boolean;
  min_likelihood?: string;
  custom_info_types: CustomInfoTypes;
  info_types: InfoTypes;
  limits: Limits;
  rule_set: RuleSet;
}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface GoogleDataLossPreventionInspectTemplateArgs {
  description?: string;
  display_name?: string;
  parent: string;
  inspect_config: InspectConfig;
  timeouts: Timeouts;
}
export class google_data_loss_prevention_inspect_template extends TerraformResource {
  readonly id?: string;
  readonly name!: string;
  readonly template_id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: GoogleDataLossPreventionInspectTemplateArgs) {
    super(config, "resource", args, resourceName, "google_data_loss_prevention_inspect_template");
  }
}