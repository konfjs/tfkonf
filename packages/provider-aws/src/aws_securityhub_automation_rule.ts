import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateNote {
  text: string;
  updated_by: string;
}

export interface AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateRelatedFindings {
  id: string;
  product_arn: string;
}

export interface AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateSeverity {
  product?: number;
}

export interface AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateWorkflow {
  status?: string;
}

export interface AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdate {
  confidence?: number;
  criticality?: number;
  types?: string[];
  user_defined_fields?: { [key: string]: string };
  verification_state?: string;
  note: AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateNote;
  related_findings: AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateRelatedFindings;
  severity: AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateSeverity;
  workflow: AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdateWorkflow;
}

export interface AwsSecurityhubAutomationRuleArgsActions {
  type?: string;
  finding_fields_update: AwsSecurityhubAutomationRuleArgsActionsFindingFieldsUpdate;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaAwsAccountId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaAwsAccountName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaCompanyName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaComplianceAssociatedStandardsId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaComplianceSecurityControlId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaComplianceStatus {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaConfidence {
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaCreatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaCreatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgsCriteriaCreatedAtDateRange;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaCriticality {
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaDescription {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaFirstObservedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaFirstObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgsCriteriaFirstObservedAtDateRange;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaGeneratorId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaLastObservedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaLastObservedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgsCriteriaLastObservedAtDateRange;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaNoteText {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaNoteUpdatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaNoteUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgsCriteriaNoteUpdatedAtDateRange;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaNoteUpdatedBy {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaProductArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaProductName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaRecordState {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaRelatedFindingsId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaRelatedFindingsProductArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceApplicationArn {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceApplicationName {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceDetailsOther {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceId {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourcePartition {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceRegion {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceTags {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaResourceType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaSeverityLabel {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaSourceUrl {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaTitle {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaType {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaUpdatedAtDateRange {
  unit: string;
  value: number;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaUpdatedAt {
  end?: string;
  start?: string;
  date_range: AwsSecurityhubAutomationRuleArgsCriteriaUpdatedAtDateRange;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaUserDefinedFields {
  comparison: string;
  key: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaVerificationState {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteriaWorkflowStatus {
  comparison: string;
  value: string;
}

export interface AwsSecurityhubAutomationRuleArgsCriteria {
  aws_account_id: AwsSecurityhubAutomationRuleArgsCriteriaAwsAccountId;
  aws_account_name: AwsSecurityhubAutomationRuleArgsCriteriaAwsAccountName;
  company_name: AwsSecurityhubAutomationRuleArgsCriteriaCompanyName;
  compliance_associated_standards_id: AwsSecurityhubAutomationRuleArgsCriteriaComplianceAssociatedStandardsId;
  compliance_security_control_id: AwsSecurityhubAutomationRuleArgsCriteriaComplianceSecurityControlId;
  compliance_status: AwsSecurityhubAutomationRuleArgsCriteriaComplianceStatus;
  confidence: AwsSecurityhubAutomationRuleArgsCriteriaConfidence;
  created_at: AwsSecurityhubAutomationRuleArgsCriteriaCreatedAt;
  criticality: AwsSecurityhubAutomationRuleArgsCriteriaCriticality;
  description: AwsSecurityhubAutomationRuleArgsCriteriaDescription;
  first_observed_at: AwsSecurityhubAutomationRuleArgsCriteriaFirstObservedAt;
  generator_id: AwsSecurityhubAutomationRuleArgsCriteriaGeneratorId;
  id: AwsSecurityhubAutomationRuleArgsCriteriaId;
  last_observed_at: AwsSecurityhubAutomationRuleArgsCriteriaLastObservedAt;
  note_text: AwsSecurityhubAutomationRuleArgsCriteriaNoteText;
  note_updated_at: AwsSecurityhubAutomationRuleArgsCriteriaNoteUpdatedAt;
  note_updated_by: AwsSecurityhubAutomationRuleArgsCriteriaNoteUpdatedBy;
  product_arn: AwsSecurityhubAutomationRuleArgsCriteriaProductArn;
  product_name: AwsSecurityhubAutomationRuleArgsCriteriaProductName;
  record_state: AwsSecurityhubAutomationRuleArgsCriteriaRecordState;
  related_findings_id: AwsSecurityhubAutomationRuleArgsCriteriaRelatedFindingsId;
  related_findings_product_arn: AwsSecurityhubAutomationRuleArgsCriteriaRelatedFindingsProductArn;
  resource_application_arn: AwsSecurityhubAutomationRuleArgsCriteriaResourceApplicationArn;
  resource_application_name: AwsSecurityhubAutomationRuleArgsCriteriaResourceApplicationName;
  resource_details_other: AwsSecurityhubAutomationRuleArgsCriteriaResourceDetailsOther;
  resource_id: AwsSecurityhubAutomationRuleArgsCriteriaResourceId;
  resource_partition: AwsSecurityhubAutomationRuleArgsCriteriaResourcePartition;
  resource_region: AwsSecurityhubAutomationRuleArgsCriteriaResourceRegion;
  resource_tags: AwsSecurityhubAutomationRuleArgsCriteriaResourceTags;
  resource_type: AwsSecurityhubAutomationRuleArgsCriteriaResourceType;
  severity_label: AwsSecurityhubAutomationRuleArgsCriteriaSeverityLabel;
  source_url: AwsSecurityhubAutomationRuleArgsCriteriaSourceUrl;
  title: AwsSecurityhubAutomationRuleArgsCriteriaTitle;
  type: AwsSecurityhubAutomationRuleArgsCriteriaType;
  updated_at: AwsSecurityhubAutomationRuleArgsCriteriaUpdatedAt;
  user_defined_fields: AwsSecurityhubAutomationRuleArgsCriteriaUserDefinedFields;
  verification_state: AwsSecurityhubAutomationRuleArgsCriteriaVerificationState;
  workflow_status: AwsSecurityhubAutomationRuleArgsCriteriaWorkflowStatus;
}

export interface AwsSecurityhubAutomationRuleArgs {
  description: string;
  rule_name: string;
  rule_order: number;
  tags?: { [key: string]: string };
  actions: AwsSecurityhubAutomationRuleArgsActions;
  criteria: AwsSecurityhubAutomationRuleArgsCriteria;
}

export class aws_securityhub_automation_rule extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly is_terminal?: boolean;
  readonly rule_status?: string;
  readonly tags_all!: { [key: string]: string };

  constructor(config: TerraformConfig, resourceName: string, args: AwsSecurityhubAutomationRuleArgs) {
    super(config, "resource", args, resourceName, "aws_securityhub_automation_rule");
  }
}
