import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdatenote {
  text: string;
  updated_by: string;
}
export interface AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdateRelatedFindings {
  id: string;
  product_arn: string;
}
export interface AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdateseverity {
  product?: number;
}
export interface AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdateworkflow {
  status?: string;
}
export interface AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdate {
  confidence?: number;
  criticality?: number;
  types?: string[];
  user_defined_fields?: {
    [key: string]: string;
  };
  verification_state?: string;
  note: AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdatenote;
  related_findings: AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdateRelatedFindings;
  severity: AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdateseverity;
  workflow: AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdateworkflow;
}
export interface AwsSecurityhubAutomationRuleArgsactions {
  type?: string;
  finding_fields_update: AwsSecurityhubAutomationRuleArgsactionsFindingFieldsUpdate;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaAwsAccountId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaAwsAccountName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaCompanyName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaComplianceAssociatedStandardsId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaComplianceSecurityControlId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaComplianceStatus {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaconfidence {
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaCreatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaCreatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgscriteriaCreatedAtDateRange;
}
export interface AwsSecurityhubAutomationRuleArgscriteriacriticality {
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriadescription {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaFirstObservedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaFirstObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgscriteriaFirstObservedAtDateRange;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaGeneratorId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaid {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaLastObservedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaLastObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgscriteriaLastObservedAtDateRange;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaNoteText {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaNoteUpdatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaNoteUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgscriteriaNoteUpdatedAtDateRange;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaNoteUpdatedBy {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaProductArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaProductName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaRecordState {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaRelatedFindingsId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaRelatedFindingsProductArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceApplicationArn {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceApplicationName {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceDetailsOther {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceId {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourcePartition {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceRegion {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceTags {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaResourceType {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaSeverityLabel {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaSourceUrl {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriatitle {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriatype {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaUpdatedAtDateRange {
  unit: string;
  value: number;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgscriteriaUpdatedAtDateRange;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaUserDefinedFields {
  comparison: string;
  key: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaVerificationState {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteriaWorkflowStatus {
  comparison: string;
  value: string;
}
export interface AwsSecurityhubAutomationRuleArgscriteria {
  aws_account_id: AwsSecurityhubAutomationRuleArgscriteriaAwsAccountId;
  aws_account_name: AwsSecurityhubAutomationRuleArgscriteriaAwsAccountName;
  company_name: AwsSecurityhubAutomationRuleArgscriteriaCompanyName;
  compliance_associated_standards_id: AwsSecurityhubAutomationRuleArgscriteriaComplianceAssociatedStandardsId;
  compliance_security_control_id: AwsSecurityhubAutomationRuleArgscriteriaComplianceSecurityControlId;
  compliance_status: AwsSecurityhubAutomationRuleArgscriteriaComplianceStatus;
  confidence: AwsSecurityhubAutomationRuleArgscriteriaconfidence;
  created_at: AwsSecurityhubAutomationRuleArgscriteriaCreatedAt;
  criticality: AwsSecurityhubAutomationRuleArgscriteriacriticality;
  description: AwsSecurityhubAutomationRuleArgscriteriadescription;
  first_observed_at: AwsSecurityhubAutomationRuleArgscriteriaFirstObservedAt;
  generator_id: AwsSecurityhubAutomationRuleArgscriteriaGeneratorId;
  id: AwsSecurityhubAutomationRuleArgscriteriaid;
  last_observed_at: AwsSecurityhubAutomationRuleArgscriteriaLastObservedAt;
  note_text: AwsSecurityhubAutomationRuleArgscriteriaNoteText;
  note_updated_at: AwsSecurityhubAutomationRuleArgscriteriaNoteUpdatedAt;
  note_updated_by: AwsSecurityhubAutomationRuleArgscriteriaNoteUpdatedBy;
  product_arn: AwsSecurityhubAutomationRuleArgscriteriaProductArn;
  product_name: AwsSecurityhubAutomationRuleArgscriteriaProductName;
  record_state: AwsSecurityhubAutomationRuleArgscriteriaRecordState;
  related_findings_id: AwsSecurityhubAutomationRuleArgscriteriaRelatedFindingsId;
  related_findings_product_arn: AwsSecurityhubAutomationRuleArgscriteriaRelatedFindingsProductArn;
  resource_application_arn: AwsSecurityhubAutomationRuleArgscriteriaResourceApplicationArn;
  resource_application_name: AwsSecurityhubAutomationRuleArgscriteriaResourceApplicationName;
  resource_details_other: AwsSecurityhubAutomationRuleArgscriteriaResourceDetailsOther;
  resource_id: AwsSecurityhubAutomationRuleArgscriteriaResourceId;
  resource_partition: AwsSecurityhubAutomationRuleArgscriteriaResourcePartition;
  resource_region: AwsSecurityhubAutomationRuleArgscriteriaResourceRegion;
  resource_tags: AwsSecurityhubAutomationRuleArgscriteriaResourceTags;
  resource_type: AwsSecurityhubAutomationRuleArgscriteriaResourceType;
  severity_label: AwsSecurityhubAutomationRuleArgscriteriaSeverityLabel;
  source_url: AwsSecurityhubAutomationRuleArgscriteriaSourceUrl;
  title: AwsSecurityhubAutomationRuleArgscriteriatitle;
  type: AwsSecurityhubAutomationRuleArgscriteriatype;
  updated_at: AwsSecurityhubAutomationRuleArgscriteriaUpdatedAt;
  user_defined_fields: AwsSecurityhubAutomationRuleArgscriteriaUserDefinedFields;
  verification_state: AwsSecurityhubAutomationRuleArgscriteriaVerificationState;
  workflow_status: AwsSecurityhubAutomationRuleArgscriteriaWorkflowStatus;
}
export interface AwsSecurityhubAutomationRuleArgs {
  description: string;
  rule_name: string;
  rule_order: number;
  tags?: {
    [key: string]: string;
  };
  actions: AwsSecurityhubAutomationRuleArgsactions;
  criteria: AwsSecurityhubAutomationRuleArgscriteria;
}
export class aws_securityhub_automation_rule extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly is_terminal?: boolean;
  readonly rule_status?: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubAutomationRuleArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_automation_rule");
  }
}