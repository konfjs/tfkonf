import { TerraformConfig, TerraformResource } from "tfs";
export interface Note {
  text: string;
  updated_by: string;
}
export interface RelatedFindings {
  id: string;
  product_arn: string;
}
export interface Severity {
  product?: number;
}
export interface Workflow {
  status?: string;
}
export interface FindingFieldsUpdate {
  confidence?: number;
  criticality?: number;
  types?: string[];
  user_defined_fields?: {
    [key: string]: string;
  };
  verification_state?: string;
  note: Note;
  related_findings: RelatedFindings;
  severity: Severity;
  workflow: Workflow;
}
export interface Actions {
  type?: string;
  finding_fields_update: FindingFieldsUpdate;
}
export interface AwsAccountId {
  comparison: string;
  value: string;
}
export interface AwsAccountName {
  comparison: string;
  value: string;
}
export interface CompanyName {
  comparison: string;
  value: string;
}
export interface ComplianceAssociatedStandardsId {
  comparison: string;
  value: string;
}
export interface ComplianceSecurityControlId {
  comparison: string;
  value: string;
}
export interface ComplianceStatus {
  comparison: string;
  value: string;
}
export interface Confidence {
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface CreatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface Criticality {
  eq?: number;
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}
export interface Description {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface FirstObservedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface GeneratorId {
  comparison: string;
  value: string;
}
export interface Id {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface LastObservedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface NoteText {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface NoteUpdatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface NoteUpdatedBy {
  comparison: string;
  value: string;
}
export interface ProductArn {
  comparison: string;
  value: string;
}
export interface ProductName {
  comparison: string;
  value: string;
}
export interface RecordState {
  comparison: string;
  value: string;
}
export interface RelatedFindingsId {
  comparison: string;
  value: string;
}
export interface RelatedFindingsProductArn {
  comparison: string;
  value: string;
}
export interface ResourceApplicationArn {
  comparison: string;
  value: string;
}
export interface ResourceApplicationName {
  comparison: string;
  value: string;
}
export interface ResourceDetailsOther {
  comparison: string;
  key: string;
  value: string;
}
export interface ResourceId {
  comparison: string;
  value: string;
}
export interface ResourcePartition {
  comparison: string;
  value: string;
}
export interface ResourceRegion {
  comparison: string;
  value: string;
}
export interface ResourceTags {
  comparison: string;
  key: string;
  value: string;
}
export interface ResourceType {
  comparison: string;
  value: string;
}
export interface SeverityLabel {
  comparison: string;
  value: string;
}
export interface SourceUrl {
  comparison: string;
  value: string;
}
export interface Title {
  comparison: string;
  value: string;
}
export interface Type {
  comparison: string;
  value: string;
}
export interface DateRange {
  unit: string;
  value: number;
}
export interface UpdatedAt {
  end?: string;
  start?: string;
  date_range: DateRange;
}
export interface UserDefinedFields {
  comparison: string;
  key: string;
  value: string;
}
export interface VerificationState {
  comparison: string;
  value: string;
}
export interface WorkflowStatus {
  comparison: string;
  value: string;
}
export interface Criteria {
  aws_account_id: AwsAccountId;
  aws_account_name: AwsAccountName;
  company_name: CompanyName;
  compliance_associated_standards_id: ComplianceAssociatedStandardsId;
  compliance_security_control_id: ComplianceSecurityControlId;
  compliance_status: ComplianceStatus;
  confidence: Confidence;
  created_at: CreatedAt;
  criticality: Criticality;
  description: Description;
  first_observed_at: FirstObservedAt;
  generator_id: GeneratorId;
  id: Id;
  last_observed_at: LastObservedAt;
  note_text: NoteText;
  note_updated_at: NoteUpdatedAt;
  note_updated_by: NoteUpdatedBy;
  product_arn: ProductArn;
  product_name: ProductName;
  record_state: RecordState;
  related_findings_id: RelatedFindingsId;
  related_findings_product_arn: RelatedFindingsProductArn;
  resource_application_arn: ResourceApplicationArn;
  resource_application_name: ResourceApplicationName;
  resource_details_other: ResourceDetailsOther;
  resource_id: ResourceId;
  resource_partition: ResourcePartition;
  resource_region: ResourceRegion;
  resource_tags: ResourceTags;
  resource_type: ResourceType;
  severity_label: SeverityLabel;
  source_url: SourceUrl;
  title: Title;
  type: Type;
  updated_at: UpdatedAt;
  user_defined_fields: UserDefinedFields;
  verification_state: VerificationState;
  workflow_status: WorkflowStatus;
}
export interface AwsSecurityhubAutomationRuleArgs {
  description: string;
  rule_name: string;
  rule_order: number;
  tags?: {
    [key: string]: string;
  };
  actions: Actions;
  criteria: Criteria;
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